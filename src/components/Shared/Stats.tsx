import { LucideProps } from "lucide-react";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import Counter from "./CountUp";

type Props = {
  title: string;
  subtitle: string;
  percentage?: boolean;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};
export default function Stats({ item }: { item: Props }) {
  return (
    <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center hover:bg-white/60 transition">
      <item.Icon className="w-10 h-10 text-white mb-4" />
      <h3 className="text-3xl font-bold text-green-500">
        <Counter count={Number(item.title)} />
        {item.percentage && "%"}
      </h3>
      <p className="text-lg text-gray-200 mt-1">{item.subtitle}</p>
    </div>
  );
}
