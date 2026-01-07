"use client";

import { useEffect, useState } from "react";
import Container from "../Shared/Container";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

const images = [
  "https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg",
  "https://images.pexels.com/photos/33770555/pexels-photo-33770555.jpeg",
  "https://images.pexels.com/photos/10646598/pexels-photo-10646598.jpeg",
  "https://images.pexels.com/photos/10646599/pexels-photo-10646599.jpeg",
];

export default function Hero() {
  const t = useTranslation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="text-white text-center lg:text-left">
              <span className="inline-block px-4 py-1 mb-5 text-sm md:text-base font-semibold rounded-full border border-white/40">
                {t.schoolName}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight">
                {t.hero.fixedTitle}
                <br />
                <span className="text-green-500">
                  <Typewriter
                    cursor
                    delaySpeed={3000}
                    words={t.hero.typingTitles}
                    loop={0}
                  />
                </span>
              </h1>

              <p className="mt-5 md:mt-8 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>

              <div className="mt-8">
                <Link
                  href="#admission"
                  className="inline-block px-7 py-3 bg-secondary text-white rounded-md text-lg font-medium hover:bg-primary transition shadow-md"
                >
                  {t.hero.cta}
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/hero/hero_img.png"
                alt="Hero Image"
                width={420}
                height={520}
                className="hidden sm:flex w-55 sm:w-70 md:w-85 lg:w-105 max-h-[60vh] object-contain"
                priority
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
