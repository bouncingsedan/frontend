"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact-us"
        >
          <Image
            aria-hidden
            src="/brand-line.svg"
            alt="File icon"
            width={20}
            height={20}
          />
          Contact Us
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contacts"
        >
          <Image
            aria-hidden
            src="/user-cog.svg"
            alt="Window icon"
            width={20}
            height={20}
          />
          Manage Contacts
        </Link>
        <a
          className="flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/copyright.svg"
            alt="Globe icon"
            width={20}
            height={20}
          />
          2025 OpenAgent
        </a>
      </footer>
    </>
  );
}
