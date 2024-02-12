"use client";
import { AccordionItem } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import Image from "next/image";
import React from "react";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

interface NavItemsProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

const NavItem = ({
  isExpanded,
  isActive,
  organization,
  onExpand,
}: NavItemsProps) => {
  return (
    <>
      <AccordionItem value={organization.id} className="norber-none">
        <AccordionTrigger
          onClick={() => onExpand(organization.id)}
          className={cn(
            "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-mb hover:bg-neutral-500/10 transition test-start no-underline hover:no-underline ",
            isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
          )}
        >
          <div className="flex items-center gap-x-2">
            <div className="w-7 h-7 relative">
              <Image
                fill
                src={organization.imageUrl}
                alt="image"
                className="rounded-sm object-cover"
              />
            </div>
          </div>
        </AccordionTrigger>
      </AccordionItem>
    </>
  );
};

export default NavItem;
