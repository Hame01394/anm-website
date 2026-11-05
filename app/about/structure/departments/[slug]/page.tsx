import { notFound } from "next/navigation";
import OrganizationProfile from "../../OrganizationProfile";
import { departments } from "../../structureData";

export function generateStaticParams() {
  return departments.map((item) => ({ slug: item.slug }));
}

export default async function DepartmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = departments.find((entry) => entry.slug === slug);

  if (!item) notFound();

  return (
    <OrganizationProfile
      item={item}
      backPath="/about/structure/departments"
      backLabel="Departments"
    />
  );
}