import { Skill } from "@/types/type";
import React from "react";

type Props = {
  skill: Skill;
};

export default function SkillProgress({ skill }: Props) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-gray-700">{skill.name}</span>
        <span className="text-gray-500">{skill.value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-green-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${skill.value}%` }}
        ></div>
      </div>
    </div>
  );
}
