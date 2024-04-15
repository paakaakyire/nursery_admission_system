"use client";

import { adminSideBarLinks } from "@/app/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <section className="text-white">
      <div className="sticky top-[40px]">
        {adminSideBarLinks.map((item) => {
          // chect active links later
          const isActive = pathname === item.path;

          return (
            <div className="pb-[20px]">
              <Link
                href={item.path}
                key={item.name}
                className={cn(
                  "flex items-center p-4 gap-4 rounded-lg text-white",
                  {
                    "bg-white text-black": isActive,
                  }
                )}
              >
                <p>{item.icon}</p>
                <p>{item.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
