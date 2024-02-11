import OrgControl from "./_conponents/OrgControl";

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      <main>{children}</main>
    </>
  );
};
export default OrganizationIdLayout;
