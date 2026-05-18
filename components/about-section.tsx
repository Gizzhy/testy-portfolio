"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="about-image flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-4 border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/images/Tofunmi-2.PNG"
              alt="Oluwatofunmisin Akinwumi"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="about-text space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Who's{" "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">
                Tofunmi?
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              I’m a qualified lawyer and M.Sc. student in International Studies in Intellectual Property and Data Law at Technische Universität Dresden, combining over five years of legal experience with a growing focus on legal technology, data law, and innovation. My work sits at the intersection of law, business, and technology, with experience in legal research, contract review, IP, compliance, and digital legal tools.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Qualified Lawyer & IP/Data Law Student
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                 Legally trained across intellectual property, corporate and commercial law, contract review, regulatory compliance, and dispute resolution, with current academic focus on copyright, trademarks, patents, data law, and digital regulation.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Legal Tech & Research-Driven Thinker
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  I combine legal analysis with practical technology skills, building projects such as an NLP-based Nigerian legal case summarizer, machine learning models, and workflow automations that reflect my interest in modernising legal work.
                </p>
              </div>
            </div>
          </div>

          <Button
            className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-5.5 md:px-15.5 text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
            onClick={() =>
              (window.location.href = "mailto:oluwatofunmisin4@gmail.com")
            }
          >
            <Mail className="w-5 h-5" />
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}
