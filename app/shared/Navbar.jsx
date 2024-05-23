"use client";

import React, { useState } from "react";
import { navbarLinks } from "../constants";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logout from "../logout";
// import MobileNav from "@/components/MobileNav";

const Navbar = () => {
  const { user, error, isLoading } = useUser();
  const [profile, setProfile] = useState(false);

  return (
    <header>
      <nav className="flex px-24 justify-between items-center bg-white py-4 border-b border-b-blue-500 tablet:px-8 fixed w-full z-[999] top-0 left-0">
        <Link
          href={"/"}
          className="text-[1.2rem] font-bold hover:text-blue-500 hover:transition-all hover:duration-300 hover:ease-in-out"
        >
          D<span className="text-indigo-700">academy</span>
        </Link>
        <div className="navbar">
          <li className="flex gap-12 tablet:gap-6 Mtablet:gap-5 Mobile:hidden">
            {navbarLinks.map((item) => (
              <Link
                className="text-[1.05rem] hover:text-blue-500 hover:transition-all hover:duration-300 hover:ease-in-out"
                href={item.link}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </li>
        </div>
        <div className="Mobile:hidden">
          {!user && (
            <Link
              href={"/api/auth/login"}
              className="bg-blue-500 py-[0.8rem] px-4 rounded-md text-white font-bold hover:bg-gradient-to-tr hover:from-orange-600 hover:to-blue-600 hover:transition hover:duration-300 hover:ease-in-out"
            >
              Log in
            </Link>
          )}

          {user && (
            <div className="profile">
              {profile ? (
                <div className="profile-image">
                  <img
                    src={user.picture}
                    alt={user.name}
                    width={28}
                    height={28}
                    className="rounded-full cursor-pointer ring ring-blue-600 mb-[0.6rem]"
                    onClick={() => setProfile(false)}
                  />
                </div>
              ) : (
                <div className="profile-image">
                  <img
                    src={user.picture}
                    alt={user.name}
                    width={28}
                    height={28}
                    className="rounded-full cursor-pointer ring ring-blue-600 mb-[0.6rem]"
                    onClick={() => setProfile(true)}
                  />
                </div>
              )}
              {profile && (
                <div className="absolute top-[4.5rem] right-[5rem] bg-white py-4 px-4 rounded-md text-[#222] border-b border-b-blue-500 zoomIn">
                  <h2 className="mb-[0.5rem]">{user.name}</h2>
                  <p className="mb-[0.7rem]">{user.email}</p>
                  <Logout />
                </div>
              )}
            </div>
          )}
        </div>
        {/* mobile screen */}
        <div className="hidden Mobile:flex">
          <Sheet>
            <SheetTrigger asChild>
              <MdMenu size={24} className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <p className="text-center mb-[2rem] text-blue-500">Nursery</p>
                </SheetTitle>
                <SheetDescription>
                  <li className="flex flex-col items-center gap-[4rem] mb-[2rem]">
                    {navbarLinks.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                          className="text-[1.1rem] hover:text-blue-500 hover:transition-all hover:duration-300 hover:ease-in-out"
                          href={item.link}
                          key={item.name}
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </li>
                  <div className="flex items-center justify-center">
                    {!user && (
                      <Link
                        href={"/api/auth/login"}
                        className="bg-blue-500 py-[0.8rem] px-4 rounded-md text-white font-bold hover:bg-gradient-to-tr hover:from-orange-600 hover:to-blue-600 hover:transition hover:duration-300 hover:ease-in-out"
                      >
                        Log in
                      </Link>
                    )}

                    {user && (
                      <div className="profile">
                        {profile ? (
                          <div className="profile-image">
                            <img
                              src={user.picture}
                              alt={user.name}
                              width={28}
                              height={28}
                              className="rounded-full cursor-pointer ring ring-blue-600 mb-[0.6rem]"
                              onClick={() => setProfile(false)}
                            />
                          </div>
                        ) : (
                          <div className="profile-image">
                            <img
                              src={user.picture}
                              alt={user.name}
                              width={28}
                              height={28}
                              className="rounded-full cursor-pointer ring ring-blue-600 mb-[0.6rem]"
                              onClick={() => setProfile(true)}
                            />
                          </div>
                        )}
                        {profile && (
                          <div className="absolute top-[33rem] right-[3rem] bg-white py-4 px-4 rounded-md text-[#222] border-b border-b-blue-500 zoomIn">
                            <h2 className="mb-[0.5rem]">{user.name}</h2>
                            <p className="mb-[0.7rem]">{user.email}</p>
                            <Logout />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
