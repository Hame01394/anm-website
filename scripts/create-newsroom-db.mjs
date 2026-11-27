import { neon } from "@neondatabase/serverless";
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing.");
}
const sql = neon(process.env.DATABASE_URL);
const statements = [
  // 1. Authorized newsroom users
  sql`
    CREATE TABLE IF NOT EXISTS public.newsroom_users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      auth_user_id TEXT NOT NULL UNIQUE,
      display_name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      role TEXT NOT NULL CHECK (role IN ('admin', 'editor')),
      is_active BOOLEAN NOT NULL DEFAULT TRUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `,
  // 2. Six newsroom categories
  sql`
    CREATE TABLE IF NOT EXISTS public.newsroom_categories (
      id TEXT PRIMARY KEY,
      name_en TEXT NOT NULL,
      name_ti TEXT,
      sort_order INTEGER NOT NULL DEFAULT 0,
      is_active BOOLEAN NOT NULL DEFAULT TRUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `,
  // 3. Articles and their publication status
  sql`
    CREATE TABLE IF NOT EXISTS public.newsroom_articles (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      category_id TEXT NOT NULL REFERENCES public.newsroom_categories(id),
      status TEXT NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'scheduled', 'published', 'archived')),
      is_featured BOOLEAN NOT NULL DEFAULT FALSE,
      author_id UUID REFERENCES public.newsroom_users(id) ON DELETE SET NULL,
      created_by UUID REFERENCES public.newsroom_users(id) ON DELETE SET NULL,
      updated_by UUID REFERENCES public.newsroom_users(id) ON DELETE SET NULL,
      scheduled_at TIMESTAMPTZ,
      published_at TIMESTAMPTZ,
      archived_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `,
  // 4. English and Tigrinya article versions
  sql`
    CREATE TABLE IF NOT EXISTS public.newsroom_translations (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      article_id UUID NOT NULL REFERENCES public.newsroom_articles(id) ON DELETE CASCADE,
      locale TEXT NOT NULL CHECK (locale IN ('en', 'ti')),
      slug TEXT NOT NULL,
      title TEXT NOT NULL,
      subtitle TEXT,
      body JSONB NOT NULL DEFAULT '{}'::jsonb,
      seo_title TEXT,
      seo_description TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      UNIQUE (article_id, locale),
      UNIQUE (locale, slug)
    )
  `,
  // 5. Article revision history
  sql`
    CREATE TABLE IF NOT EXISTS public.newsroom_revisions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      translation_id UUID NOT NULL REFERENCES public.newsroom_translations(id) ON DELETE CASCADE,
      revision_number INTEGER NOT NULL,
      snapshot JSONB NOT NULL,
      edited_by UUID REFERENCES public.newsroom_users(id) ON DELETE SET NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      UNIQUE (translation_id, revision_number)
    )
  `,
  // 6. Media library metadata
  sql`
    CREATE TABLE IF NOT EXISTS public.newsroom_media (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      storage_provider TEXT NOT NULL,
      storage_key TEXT NOT NULL,
      public_url TEXT NOT NULL,
      mime_type TEXT NOT NULL,
      alt_text TEXT,
      caption TEXT,
      uploaded_by UUID REFERENCES public.newsroom_users(id) ON DELETE SET NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `,
  // 7. Categories
  sql`
    INSERT INTO public.newsroom_categories
      (id, name_en, sort_order)
    VALUES
      ('latest-news', 'Latest News', 1),
      ('analysis-commentary', 'Analysis & Commentary', 2),
      ('press-releases', 'Press Releases', 3),
      ('speeches-statements', 'Speeches & Statements', 4),
      ('videos-interviews', 'Videos & Interviews', 5),
      ('publications-reports', 'Publications & Reports', 6)
    ON CONFLICT (id) DO NOTHING
  `,
  // 8. Useful indexes
  sql`
    CREATE INDEX IF NOT EXISTS idx_newsroom_articles_status
    ON public.newsroom_articles(status)
  `,
  sql`
    CREATE INDEX IF NOT EXISTS idx_newsroom_articles_category
    ON public.newsroom_articles(category_id)
  `,
  sql`
    CREATE INDEX IF NOT EXISTS idx_newsroom_articles_published
    ON public.newsroom_articles(published_at DESC)
  `,
  sql`
    CREATE INDEX IF NOT EXISTS idx_newsroom_translations_article
    ON public.newsroom_translations(article_id)
  `,
  sql`
    CREATE INDEX IF NOT EXISTS idx_newsroom_revisions_translation
    ON public.newsroom_revisions(translation_id)
  `
];
try {
  for (const statement of statements) {
    await statement;
  }
  console.log("SUCCESS: ANM newsroom database tables created.");
  console.log("Six publication categories added.");
  console.log("English and Tigrinya article support configured.");
  console.log("Existing neon_auth tables were not modified.");
} catch (error) {
  console.error("Migration failed:", error.message);
  process.exitCode = 1;
}
