"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <>
      <div className="bg-white pt-4  border p-6 ">
        <div className="flex w-full justify-center ">
          <Link href="/">
            <Image
              src="/openagent.svg"
              alt="Next.js logo"
              width={240}
              height={24.16}
              priority
            />
          </Link>
        </div>
      </div>
    </>
  );
}
