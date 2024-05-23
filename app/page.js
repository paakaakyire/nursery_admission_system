"use client";

import React from "react";
import Link from "next/link";
import { Footer, Navbar } from "./shared";

export default function Home() {
  return (
    <section className="section">
      <Navbar />
      <main className="flex justify-center items-center pt-[10rem]">
        <div className="text-center">
          <h1 className="capitalize font-bold text-[4rem] mb-4 text-[#ffffff] leading-[4rem] Mobile:text-[2rem]">
            Welcome to delany academy
          </h1>
          <p className="text-[1.1rem] font-normal mb-8 text-[#ffffff]">
            We embrace our student to learn more in our school to archieve a
            better grade in future.
          </p>
          <Link
            href={"/"}
            className="bg-indigo-700 py-3 px-4 rounded-md text-white hover:bg-gradient-to-tr hover:from-indigo-500 hover:to-indigo-800 hover:transition hover:duration-300 hover:ease-in-out capitalize"
          >
            learn more
          </Link>
        </div>
        {/* <div className="right"></div> */}
      </main>
      {/* <Footer /> */}
    </section>
  );
}
