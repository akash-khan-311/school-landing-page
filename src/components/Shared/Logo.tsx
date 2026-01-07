import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <>
      <Image src="/images/logo/logo.png" alt="logo" width={60} height={60} />
    </>
  );
}
