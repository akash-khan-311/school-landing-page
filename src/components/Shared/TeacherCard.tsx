/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { Skill, Teacher } from "@/types/type";
import SkillProgress from "../SkillProgress";

type Props = {
  teacher: Teacher;
};

export default function TeacherCard({ teacher }: Props) {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6 border">
        {/* Left Image */}
        <div className="w-full md:w-1/3">
          <Image
            src={teacher.image}
            alt={teacher.name}
            width={300}
            height={300}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
          <p className="text-green-500 font-semibold uppercase text-sm mt-1">
            {teacher.designation}
          </p>

          <p className="text-gray-600 mt-4 text-sm leading-relaxed">
            {teacher.bio}
          </p>

          {/* Skills */}
          <div className="mt-5 space-y-3">
            {teacher.skills.map((skill: Skill, index: any) => (
              <SkillProgress key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
