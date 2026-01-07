/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export default function ContactCard({ Icon, title, des }: any) {
  return (
    <div data-aos="fade-up" className="">
      <div className=" p-6 rounded-2xl bg-secondary shadow-[0px_0px_16px_5px_rgba(3, 64, 134, 0.1)] border border-white/50 transition-all duration-300">
        <div className="flex items-start space-x-4 ">
          <div className="p-3 bg-linear-to-r  rounded-full text-white">
            <Icon size={44} />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-300 mb-2">
              {title}
            </h4>
            <p className="text-gray-300">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
