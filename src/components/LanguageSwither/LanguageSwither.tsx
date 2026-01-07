"use client";

import { RootState } from "@/redux/store";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { setLanguage } from "@/redux/features/languageSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";

const LanguageSwitcher = () => {
  const dispatch = useAppDispatch();
  const currentLang = useAppSelector((state: RootState) => state.language.lang);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const languages = [
    { code: "en", label: "EN", flag: "/images/flag/en.png" },
    { code: "bn", label: "BD", flag: "/images/flag/bd.png" },
  ];
  const current = languages.find((l) => l.code === currentLang)!;

  const handleSelect = (lang: "en" | "bn") => {
    dispatch(setLanguage(lang));
    localStorage.setItem("lang", lang);
    setOpen(false);
  };

  // click outside close
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Selected */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-md border text-sm bg-white hover:bg-gray-50 transition"
      >
        {/* <span className="text-lg">{current.flag}</span> */}
        <Image src={current.flag} alt="flag" width={20} height={20} />
        <span>{current.label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-full bg-white border rounded-md shadow-lg overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code as "en" | "bn")}
              className={`flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 transition ${
                currentLang === lang.code && "bg-gray-100 font-medium"
              }`}
            >
              <Image src={lang.flag} alt="flag" width={20} height={20} />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
