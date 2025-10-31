import { Header } from "@/components/composed/header";
import Image from "next/image";

export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <>
      <Header />

      <div className="flex flex-wrap items-center justify-center pt-60">
        <div className="rounded-md border p-6 shadow-sm md:w-120 bg-white flex  flex-wrap items-center justify-center ">
          <div>
            <div className="flex flex-wrap items-center justify-center">
              <Image
                src="/circle-dashed-check.svg"
                alt="Next.js logo"
                width={120}
                height={38}
                priority
              />
            </div>

            <div className="mt-2 mb-4">
              <h1 className="font-medium text-2xl text-neutral-800 text-center">
                Thanks for getting in touch
              </h1>
              <p className="text-lg text-neutral-700 text-center mt-2">
                We got your message and will reach out, talk soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
