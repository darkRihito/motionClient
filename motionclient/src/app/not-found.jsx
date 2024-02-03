import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div>
      <div className="h-screen flex flex-col gap-8 justify-center items-center">
        <p className="text-2xl md:text-4xl text-center">Could not find requested resource</p>
        <div className="relative w-full h-full max-h-96">
          {/* <Image
            src="/assets/not-found.svg"
            fill
            alt="Picture of the author"
            loading="lazy"
          /> */}
        </div>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}