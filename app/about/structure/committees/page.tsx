import OrganizationDirectory from "../OrganizationDirectory";
import { committees } from "../structureData";

export default function CommitteesPage() {
  return (
    <OrganizationDirectory
      title="ANM Committees"
      subtitle="Explore the committees established to support accountability, policy review, constitutional development and organizational coordination."
      basePath="/about/structure/committees"
      items={committees}
    />
  );
}