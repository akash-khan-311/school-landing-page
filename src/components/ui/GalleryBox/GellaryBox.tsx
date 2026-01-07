/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { PhotoView } from "react-photo-view";

const GalleryBox = ({ img }: any) => {
  return (
    <div className={`  container mx-auto px-5 lg:px-0  w-full `}>
      <div className="foo w-full h-full">
        <PhotoView src={img.src}>
          <Image
            width={300}
            height={300}
            src={img.src}
            className="w-full h-full object-cover rounded-lg"
            layout="responsive"
            alt={img.alt}
          />
        </PhotoView>
      </div>
    </div>
  );
};

export default GalleryBox;
