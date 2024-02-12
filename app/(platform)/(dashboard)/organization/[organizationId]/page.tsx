import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganizationPage = () => {
  const { userId, orgId } = auth();
  return (
    <>
      <div>
        organization page
      </div>
    </>
  );
};
export default OrganizationPage;
