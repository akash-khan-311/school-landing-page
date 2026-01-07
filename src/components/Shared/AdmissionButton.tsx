import Link from "next/link";
import React from "react";

export default function AdmissionButton({
  fullWidth,
}: {
  fullWidth?: boolean;
}) {
  return (
    <Link
      href="#"
      className={`px-6 ${
        fullWidth && "flex justify-center"
      }  py-2 text-lg font-medium bg-primary hover:bg-secondary text-white rounded-lg  transition-colors shadow-sm`}
    >
      Admission
    </Link>
  );
}
