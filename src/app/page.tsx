import Image from "next/image";
import Link from "next/link";
import RotatingText from "@/components/reactBits/RotatingText";
import Squares from "@/components/reactBits/Squares";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div
          className="font-sans grid gap-16 p-8 sm:p-20 place-items-center pt-[12vh] md:pt-[32vh]"
        >
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-white rounded-md border p-12">
            <Image
              src="/openagent.svg"
              alt="OpenAgent logo"
              width={180}
              height={38}
              priority
            />

            <div className="flex flex-wrap gap-x-2">
              <span className="overflow-hidden">
                We make it easier for you to
              </span>

              <RotatingText
                texts={["buy property", "sell property", "own property"]}
                mainClassName="px-2 bg-green-500 text-black overflow-hidden justify-center rounded-lg"
                staggerFrom={"last"}
                splitBy={"word"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

            <div className="flex flex-col items-center gap-4 flex-row">
              <Link
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primary text-background gap-2 hover:bg-[#147327] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                href="/contact-us"
                rel="noopener noreferrer"
              >
                Contact Us
              </Link>
              <Link
                className="rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                href="/contacts"
                rel="noopener noreferrer"
              >
                Contacts
              </Link>
            </div>
          </main>
        </div>
      </div>

      <div className="fixed inset-0 -z-10">
        <Squares
          speed={0.1}
          squareSize={200}
          direction="up" // up, down, left, right, diagonal
          borderColor="#dcdcdc5c"
          hoverFillColor="#222"
        />
      </div>
    </>
  );
}
