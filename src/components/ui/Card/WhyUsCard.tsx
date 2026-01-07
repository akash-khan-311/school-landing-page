"use client";
import Image from "next/image";

export type CardProps = {
  Icon: string;
  title: string;
  description?: string;
};

type Props = {
  card: CardProps;
};
export default function WhyUsCard({ card }: Props) {
  const { Icon, title, description } = card;

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <div className="p-6 bg-white rounded-lg shadow-[0px_0px_16px_5px_rgba(0,0,0,0.1)] flex flex-col items-center text-center">
        {/* Lucide Icon */}

        <div className="mb-4">
          <Image src={Icon} width={64} height={64} alt={title} />
        </div>

        <h3 className="text-xl font-semibold mb-2 text-secondary uppercase">
          {title}
        </h3>

        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
}
