import { notFound } from "next/navigation";
import OrganizationProfile from "../../OrganizationProfile";
import { regions } from "../../structureData";

export function generateStaticParams() {
  return regions.map((item) => ({ slug: item.slug }));
}

export default async function RegionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = regions.find((entry) => entry.slug === slug);

  if (!item) notFound();

  return (
    <OrganizationProfile
      item={item}
      backPath="/about/structure/regions"
      backLabel="Regional Branches"
    />
  );
}