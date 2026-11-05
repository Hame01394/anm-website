import OrganizationDirectory from "../OrganizationDirectory";
import { regions } from "../structureData";

export default function RegionsPage() {
  return (
    <OrganizationDirectory
      title="ANM Regional Branches"
      subtitle="Discover the regional and local structures through which members coordinate activities and participate in the movement."
      basePath="/about/structure/regions"
      items={regions}
    />
  );
}