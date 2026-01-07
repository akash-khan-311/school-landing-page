"use client";
import Container from "@/components/Shared/Container";
import SectionTitle from "@/components/Shared/SectionTitle";
import { useTranslation } from "@/hooks/useTranslation";
import React from "react";
import TeacherSlider from "./TeacherSlider";

export default function TeacherSection() {
  const t = useTranslation();
  return (
    <Container>
      <SectionTitle
        title={t.teacherSection.title}
        subtitle={t.teacherSection.subTitle}
      />
      <TeacherSlider teachers={t.teacherSection.teachers} />
    </Container>
  );
}
