"use client";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

export default function AdmissionButton({
  fullWidth,
}: {
  fullWidth?: boolean;
}) {
  const { admissionButton } = useTranslation();
  return (
    <Link
      href="#"
      className={`px-6 ${
        fullWidth && "flex justify-center"
      }  py-2 text-lg font-medium bg-primary hover:bg-secondary text-white rounded-lg  transition-colors shadow-sm`}
    >
      {admissionButton.title}
    </Link>
  );
}
