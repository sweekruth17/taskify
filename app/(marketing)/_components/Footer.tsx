import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  return (
    <div className="fixed bottom-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div className="hidden md:text-sm md:text-slate-500 md:block">
          Copyright © {date.getFullYear()} Taskify
        </div>
        <div className="space-x-4  md:w-auto flex justify-between w-full">
          <Button size="sm" variant="ghost" asChild>
            <Link href="/privacy">Privacy Policy</Link>
          </Button>
          <Button size="sm" variant="ghost" asChild>
            <Link href="/terms">Terms of Service</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
