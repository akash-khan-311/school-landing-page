"use client";
import Container from "@/components/Shared/Container";
import ShinyText from "@/components/ShinyText";
import { useTranslation } from "@/hooks/useTranslation";
import React from "react";

export default function Admission() {
  const t = useTranslation();
  const { admissionData } = t;
  return (
    <div
      className="relative bg-fixed bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: `url(${admissionData.bgImg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative ">
        <Container>
          <div className="text-center flex flex-col items-center justify-center">
            <ShinyText
              className="text-2xl  font-bold text-white mb-4 "
              text={t.schoolName}
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
            />
            <h2 className="text-3xl text-white font-medium py-3 px-8 bg-white/30 backdrop-blur-sm inline-block rounded-full">
              {admissionData.title}
            </h2>
            <p className="text-white my-6 md:w-1/4 text-lg">
              {admissionData.subTitle}
            </p>
            <div className="">
              <button className="text-xl flex items-center text-white px-8 py-1 bg-secondary rounded-full cursor-pointer hover:bg-primary shadow-md">
                <admissionData.applyButton.Icon size={30} />
                {admissionData.applyButton.text}
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
