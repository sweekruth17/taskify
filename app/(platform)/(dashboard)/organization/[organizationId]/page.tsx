import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganizationPage = () => {
  const { userId, orgId } = auth();
  return (
    <>
    sjdknfkljdn
      <div>
        <OrganizationSwitcher />
      </div>
    </>
  );
};
export default OrganizationPage;
