"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { capitalize, cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { SET_OPTIONS } from "@/lib/constants";
import { DropdownMenu } from "./ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

type BreadcrumbsProps = {
  className: string;
};

export default function Breadcrumbs({ className }: BreadcrumbsProps) {
  const router = useRouter();
  const pathName = usePathname();
  const isSetPage = pathName.includes("/set/");
  const pathNameSeparated = pathName.slice(1).split("/");
  const setOptions = SET_OPTIONS;
  return (
    <Breadcrumb className={cn("", className)}>
      <BreadcrumbList>
        <BreadcrumbItem>
          {pathName == "/" && (
            <BreadcrumbPage className="text-2xl text-violet-50/90">
              Home
            </BreadcrumbPage>
          )}
          {pathName != "/" && (
            <BreadcrumbLink className="text-2xl text-violet-50/90 p-2" href="/">
              Home
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {pathName != "/" && <BreadcrumbSeparator />}
        {pathNameSeparated.length > 1 && (
          <>
            {pathNameSeparated.map((item, index) => {
              if (index + 1 == pathNameSeparated.length) {
                const itemName = isSetPage
                  ? setOptions.find((option) => item === option.ptcgoCode)?.name
                  : item;
                return (
                  <>
                    <BreadcrumbItem key={index}>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 text-2xl text-violet-50/90 p-2">
                          {capitalize(itemName || item)}
                          <ChevronDown />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="start"
                          className="bg-violet-950/80 shadow-black border rounded-md p-2"
                        >
                          {setOptions
                            .filter((option) => item !== option.ptcgoCode)
                            .map((option) => {
                              return (
                                <DropdownMenuItem
                                  key={option.name}
                                  className="text-xl text-violet-50/90 select-none"
                                  onClick={() => router.push(option.albumUrl)}
                                >
                                  {option.name}
                                </DropdownMenuItem>
                              );
                            })}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </BreadcrumbItem>
                  </>
                );
              } else {
                return (
                  <>
                    <BreadcrumbItem key={index}>
                      <BreadcrumbLink
                        className="text-2xl text-violet-50/90 p-2"
                        href={`/${item}`}
                      >
                        {capitalize(item)}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator key={index + "/"} />
                  </>
                );
              }
            })}
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
