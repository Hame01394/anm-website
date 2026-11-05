import { notFound } from "next/navigation";
import OrganizationProfile from "../../OrganizationProfile";
import { committees } from "../../structureData";

export function generateStaticParams() {
  return committees.map((item) => ({ slug: item.slug }));
}

export default async function CommitteeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = committees.find((entry) => entry.slug === slug);

  if (!item) notFound();

  return (
    <OrganizationProfile
      item={item}
      backPath="/about/structure/committees"
      backLabel="Committees"
    />
  );
}