import { OrganizationList } from "@clerk/nextjs";

const SelectOrgPage = () => {
  return (
    <div>
      SelectOrgPage
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
      />
    </div>
  );
};
export default SelectOrgPage;
