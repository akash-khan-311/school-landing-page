"use client";
import SectionTitle from "@/components/Shared/SectionTitle";
import { useTranslation } from "@/hooks/useTranslation";
import { Play } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import ReactPlayer from "react-player";
export default function AboutWithVideo() {
  const { aboutVideoContent } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="container mx-auto px-4">
        {/* Title */}
        <SectionTitle
          title={aboutVideoContent.title}
          subtitle={aboutVideoContent.subTitle}
        />

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
          {/* Left: Video */}
          <div className="w-full md:w-1/2 relative">
            {!isOpen && (
              <>
                <Image
                  width={300}
                  height={300}
                  src={aboutVideoContent.videoThumbnail}
                  alt="School Video"
                  className="rounded-lg shadow-lg w-full h-100 object-cover"
                />
                <div
                  onClick={() => setIsOpen(true)}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center cursor-pointer"
                >
                  <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition">
                    <Play className="text-white w-8 h-8" />
                  </div>
                </div>
              </>
            )}

            {isOpen && (
              <div className="relative pt-[56.25%]">
                {" "}
                {/* 16:9 ratio */}
                <ReactPlayer
                  muted
                  src={aboutVideoContent.videoUrl}
                  playing={true}
                  controls={true}
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0"
                />
              </div>
            )}
          </div>

          {/* Right: Description + Points */}
          <div data-aos="fade-left" className="md:w-1/3 space-y-6">
            <p className="text-gray-700 ">{aboutVideoContent.des}</p>
            <div className="space-y-4">
              {aboutVideoContent.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <point.icon
                    size={30}
                    strokeWidth={3}
                    className=" text-green-500 "
                  />
                  <p className="text-gray-700">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
