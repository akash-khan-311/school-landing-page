"use client";
import Container from "@/components/Shared/Container";
import SectionTitle from "@/components/Shared/SectionTitle";
import { useTranslation } from "@/hooks/useTranslation";
import AboutCard from "@/components/ui/Card/AboutCard";

export default function About() {
  const t = useTranslation();
  return (
    <Container>
      <div className="flex justify-center items-center">
        <SectionTitle title={t.about.title} subtitle={t.about.subTitle} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {t?.about?.cards?.map((card, index) => (
          <AboutCard card={card} key={index} />
        ))}
      </div>
    </Container>
  );
}
