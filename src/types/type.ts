import { LucideIcon } from "lucide-react";
export type Skill = {
  name: string;
  value: number;
};

export type AboutCard = {
  Icon: LucideIcon;
  title: string;
  des: string;
};

export type AboutSection = {
  title: string;
  subTitle: string;
  cards: AboutCard[];
};

export type Teacher = {
  name: string;
  designation: string;
  image: string;
  bio: string;
  skills: Skill[];
};

export type WhyCard = {
  Icon: string;
  title: string;
  description: string;
};

// Why Section Type
export type WhySection = {
  title: string;
  subTitle: string;
  whyCard: WhyCard[];
};

export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

export type GallerySection = {
  title: string;
  subTitle: string;
  images: GalleryImage[];
};
