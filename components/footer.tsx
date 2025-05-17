import Image from "next/image";
import { AnimatedButton } from "./animated-button";
import RotatingText from "./rotating-text";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#011542]/20  pt-20 w-full flex flex-col items-center justify-start">
      <Image src="/logo.png" alt="Logo" width={200} height={100} />
      <h2 className="text-center text-3xl font-unbounded font-medium mt-6 mb-6">
        We Transform Businesses into Enterprise Brands!
      </h2>
      <p className="text-lg mb-12 text-center">
        We might be small, but we help you scale BIG!
      </p>
      <AnimatedButton
        className="rounded-full mb-12 w-full py-3 text-[#ffffff] hover:text-black font-medium max-w-sm"
        baseColor="bg-[#0b50ea]"
        endIcon={<ArrowRight className="ml-2 h-5 w-5" />}
      >
        Free Growth Call
      </AnimatedButton>

      <nav className="flex flex-col sm:flex-row items-center gap-8 pt-12 pb-6">
        <RotatingText
          text="HOME"
          href="/"
          primaryColor="text-[#ffffff]"
          secondaryColor="text-[#0b50ea]"
          className="text-sm font-medium"
          fontSize="text-sm"
        />
        <RotatingText
          text="SERVICES"
          href="/services"
          primaryColor="text-[#ffffff]"
          secondaryColor="text-[#0b50ea]"
          className="text-sm font-medium"
          fontSize="text-sm"
        />
        <RotatingText
          text="ABOUT US"
          href="/about"
          primaryColor="text-[#ffffff]"
          secondaryColor="text-[#0b50ea]"
          className="text-sm font-medium"
          fontSize="text-sm"
        />
        <RotatingText
          text="PRICING"
          href="/pricing"
          primaryColor="text-[#ffffff]"
          secondaryColor="text-[#0b50ea]"
          className="text-sm font-medium"
          fontSize="text-sm"
        />
      </nav>
    </footer>
  );
}
