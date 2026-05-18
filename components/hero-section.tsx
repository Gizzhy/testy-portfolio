"use client";

import { Mail, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px]">
            I'm{" "}
            <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">
              Oluwatofunmisin Akinwumi
            </span>
            , a qualified lawyer
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">
              bridging law and technology
            </span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            Qualified lawyer and M.Sc. student in International Studies in Intellectual Property and Data Law, with experience across legal research, contract review, IP, compliance, and legal technology. I build at the intersection of law, data, and innovation.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button
              className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
              onClick={() =>
                (window.location.href = "mailto:oluwatofunmisin4@gmail.com")
              }
            >
              <Mail className="w-5 h-5" />
              Get in touch
            </Button>
            <Button
              variant="outline"
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <FolderOpen className="w-5 h-5" />
              View experience
            </Button>
          </div>
        </div>

        <div className="hero-image flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/images/Tofunmi-2.PNG"
              alt="Oluwatofunmisin Akinwumi"
              className="w-full h-full object-cover"
              priority
              width={500}
              height={500}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
