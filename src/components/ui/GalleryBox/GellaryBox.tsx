/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZoomIn } from "lucide-react";
import Image from "next/image";
import { PhotoView } from "react-photo-view";

const GalleryBox = ({ img }: any) => {
  return (
    <div
      data-aos="zoom-in"
      className="relative group cursor-pointer overflow-hidden rounded-lg"
    >
      <PhotoView src={img.src}>
        <div className="relative w-full h-90">
          {/* Image */}
          <Image
            width={600}
            height={600}
            src={img.src}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt={img.alt}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ZoomIn
              size={80}
              strokeWidth={1.5}
              className="text-white text-4xl"
            />
          </div>
        </div>
      </PhotoView>
    </div>
  );
};

export default GalleryBox;
