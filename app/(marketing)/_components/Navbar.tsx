import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4  md:w-auto flex justify-between w-full">
          <Button size="sm" asChild>
            <Link href="/sign-up">Get started for free</Link>
          </Button>
          <span className="md:hidden my-auto">
            <Image src="logo.svg" alt="logo" height={30} width={30}></Image>
          </span>
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
