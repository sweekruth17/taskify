import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center">
        <div className="flex items-center gap-x-4">
          <div className="hidden ml-2 md:flex">
            <Logo />
          </div>
          <Button
            size="sm"
            variant='primary'
            className="rounded-sm hidden md:block h-auto py-1.5 "
          >
            Create
          </Button>

          <Button size="sm" className="rounded-sm md:hidden h-auto py-1 ml-2">
            <Plus className="h-4 w-4"></Plus>
          </Button>
        </div>
        <div className="ml-auto mr-2  flex items-center gap-x-3">
          <OrganizationSwitcher
            hidePersonal
            createOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl="/organization/:id"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          ></OrganizationSwitcher>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          ></UserButton>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
