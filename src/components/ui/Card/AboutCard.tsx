/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export type CardProps = {
  Icon?: any;
  title: string;
  des?: string;
};

type Props = {
  card: CardProps;
};
export default function AboutCard({ card }: Props) {
  const { Icon, title, des } = card;
  console.log("ICON VALUE 👉", Icon); //
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <div className="p-6 bg-white rounded-lg shadow-[0px_0px_16px_5px_rgba(0,0,0,0.1)] flex flex-col items-center text-center">
        {/* Lucide Icon */}

        <div className="bg-[#F5F5F5] p-4 rounded-full flex justify-center items-center mb-4">
          <Icon size={64} className="text-green-600" />
        </div>

        <h3 className="text-xl font-semibold mb-2 text-secondary uppercase">
          {title}
        </h3>

        <p className="text-gray-600 text-center">{des}</p>
      </div>
    </div>
  );
}
