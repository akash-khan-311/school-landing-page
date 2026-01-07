"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import en from "@/translation/en";
import bn from "@/translation/bn";

export const useTranslation = () => {
  const lang = useSelector((state: RootState) => state.language.lang);
  const translations = lang === "en" ? en : bn;

  return translations;
};
