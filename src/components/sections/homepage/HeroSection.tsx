import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 rounded-lg overflow-hidden shadow-xl mb-12 md:mb-16 bg-gradient-to-br from-background to-slate-900/50">
       <Image
        src="https://placehold.co/1600x900.png"
        alt="Abstract background representing financial technology"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-20"
        data-ai-hint="abstract data network"
        priority
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-sky-300 to-emerald-400 mb-6">
          Unlock USDT Potential. <br className="hidden sm:inline" />
          Secure Financing, Effortless Income.
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-slate-300 sm:text-xl md:mt-5 md:max-w-2xl">
          TetherVest offers sophisticated and highly secure cryptocurrency financing solutions. Grow your USDT assets with our reliable and user-friendly platform.
        </p>
        <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link href="/financing">Start Earning</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/advisor">Get AI Advice</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
