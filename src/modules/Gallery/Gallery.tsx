"use client";
import Container from "@/components/Shared/Container";
import SectionTitle from "@/components/Shared/SectionTitle";
import GalleryBox from "@/components/ui/GalleryBox/GellaryBox";
import { useTranslation } from "@/hooks/useTranslation";
import React from "react";
import { PhotoProvider } from "react-photo-view";

export default function Gallery() {
  const { galleryData } = useTranslation();
  return (
    <Container>
      <SectionTitle title={galleryData.title} subtitle={galleryData.subTitle} />
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <PhotoProvider>
            {galleryData.images.map((img) => (
              <GalleryBox key={img.id} img={img} />
            ))}
          </PhotoProvider>
          {/* <div className="col-span-2">
            <GalleryBox img={img1} />
          </div>
          <div className="">
            <GalleryBox img={img4} />
          </div>
          <div>
            <GalleryBox img={img5} />
          </div>
          <div>
            <GalleryBox img={img6} />
          </div>
          <div>
            <GalleryBox img={img7} />
          </div>
          <div className="">
            <GalleryBox img={img8} />
          </div>
          <div className="col-span-2">
            <GalleryBox img={img3} />
          </div> */}
        </div>
      </div>
    </Container>
  );
}
