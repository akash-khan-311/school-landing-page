"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // <-- Swiper v10+ এ modules path
import "swiper/css";
import "swiper/css/pagination";

import TeacherCard from "@/components/Shared/TeacherCard";
import { Teacher } from "@/types/type";

export default function TeacherSlider({ teachers }: { teachers: Teacher[] }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Swiper
        modules={[Pagination]} // <-- modules array এ Pagination
        spaceBetween={50}
        slidesPerView={2}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className="py-100"
      >
        {teachers.map((teacher) => (
          <SwiperSlide key={teacher.name}>
            <TeacherCard teacher={teacher} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
