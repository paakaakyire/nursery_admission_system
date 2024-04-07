"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image from "@/public/assets/bg.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="section">
      <main className="flex justify-center items-center pt-[10rem]">
        <div className="text-center">
          <h1 className="capitalize font-bold text-[4rem] mb-4 text-[#ffffff] leading-[4rem] Mobile:text-[2rem]">
            Welcome to delany academy
          </h1>
          <p className="text-[1.1rem] font-normal mb-8 text-[#ffffff]">
            We embrace our student to learn more in our to archieve a better
            success.
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
    </section>
  );
}
