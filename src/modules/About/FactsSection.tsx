"use client";
import Container from "@/components/Shared/Container";
import SectionTitle from "@/components/Shared/SectionTitle";
import Stats from "@/components/Shared/Stats";
import { useTranslation } from "@/hooks/useTranslation";
import React from "react";

export default function FactsSection() {
  const { info } = useTranslation();
  return (
    <div
      className="relative bg-fixed bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: `url(${info.bgImg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative ">
        <Container>
          {/* Title */}
          <SectionTitle white title={info.title} subtitle={info.subTitle} />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
            {info.stats.map((item, index) => (
              <Stats
                item={{ ...item, title: String(item.title) }}
                key={index}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
