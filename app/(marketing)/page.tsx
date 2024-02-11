import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center rounded-full bg-black text-white border shadow-sm p-4">
          <Medal className="h-6 w-6 mr-2 text-yellow-500" />
          No 1 task management
        </div>
        <h1 className="text-2xl mb-6 text-center text-neutral-800 md:text-4xl xl:text-6xl">
          Taskify helps team move faster than ever 🚀
        </h1>
        <div className="text-2xl bg-gradient-to-r from-pink-600 to-yellow-300 p-2 text-white  px-5 rounded-md  shadow-sm w-fit md:text-4xl xl:text-6xl     ">
          Accelerate work.
        </div>
      </div>
      <div
        className={cn(
          "text-sm text-slate-500 p-3 m-2 mt-4 mb-14 max-w-md text-center mx-auto md:text-xl",
          textFont.className
        )}
      >
        Collaborate manage projects and reach new productivity peaks.From high
        rises to home office, the way your team works is unique so accomplish it
        all.
        <div className="font-bold ">- Taskify</div>
      </div>
      <Button className="">
        <Link href="/sign-up">Get Started for free</Link>
      </Button>
    </div>
  );
};
export default MarketingPage;
