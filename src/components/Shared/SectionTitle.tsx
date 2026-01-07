import React from "react";
type Props = {
  title: string;
  subtitle: string;
  white?: boolean;
};
export default function SectionTitle({ title, subtitle, white }: Props) {
  const splitedTitle = title.split(" ");
  console.log(splitedTitle);
  return (
    <div className="text-center mx-auto ">
      <h1
        className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight ${
          white ? "text-white" : "text-secondary"
        }`}
      >
        {title}
      </h1>
      <hr className="w-1/4 h-1 border-0 bg-green-500 my-4 mx-auto" />
      <p className={`${white ? "text-white" : "text-gray-600"}`}>{subtitle}</p>
    </div>
  );
}
