"use client";

import Image from "next/image";
import ProjectSlider from "./projectSlider";
import { cn } from "@/lib/utils";

function ProjectCard({ title, description, tech = [], images = [], type , link }) {
  return (
   <div className="bg-zinc-900 text-white rounded-2xl shadow-lg px-4 py-6 sm:px-6 md:px-8 w-full max-w-2xl mx-auto space-y-4 border border-zinc-800 overflow-x-hidden">
      <h2 className="text-2xl font-bold text-purple-400">{title}</h2>
      <p className="text-zinc-300">{description}</p>

      {/* تکنولوژی‌ها */}
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-purple-700/20 text-purple-300 px-3 py-1 text-sm rounded-full border border-purple-700"
          >
            {item}
          </span>
        ))}
      </div>
      {/* نوع پروژه */}
      {type && (
        <div className="mt-2 text-sm text-purple-300 uppercase font-semibold tracking-wide">
          نوع: {type}
        </div>
      )}
      <div>{link}</div>

        {/* اسلاید تصاویر */}
      <ProjectSlider images={images} title={title} />
    </div>
  );
}

export default ProjectCard;
