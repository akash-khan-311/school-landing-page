"use client";
import Container from "@/components/Shared/Container";
import SectionTitle from "@/components/Shared/SectionTitle";
import { useTranslation } from "@/hooks/useTranslation";
import { WhyCard } from "@/types/type";
import React from "react";
import WhyUsCard from "@/components/ui/Card/WhyUsCard";

export default function WhyUs() {
  const { why } = useTranslation();
  return (
    <Container>
      <SectionTitle title={why.title} subtitle={why.subTitle} />
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {why.whyCard.map((card: WhyCard) => (
            <WhyUsCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </Container>
  );
}
