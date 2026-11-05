import OrganizationDirectory from "../OrganizationDirectory";
import { departments } from "../structureData";

export default function DepartmentsPage() {
  return (
    <OrganizationDirectory
      title="ANM Departments"
      subtitle="Meet the departments responsible for the movement's political, administrative, research, communications and development work."
      basePath="/about/structure/departments"
      items={departments}
    />
  );
}