import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});
const Logo = () => {
  return (
    <>
      <Link href="/">
        <div
          className={cn(
            "transition items-center gap-x-2 hidden md:flex",
            headingFont.className
          )}
        >
          <Image src="/logo.svg" alt="logo" height={30} width={30}></Image>
          <p className="text-lg text-neutral-700 mt-0.5">Taskify</p>
        </div>
      </Link>
    </>
  );
};
export default Logo;
