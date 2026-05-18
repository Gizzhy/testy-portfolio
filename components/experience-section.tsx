'use client';

import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function ExperienceSection() {
  const experiences = [
    {
    period: 'Nov 2025 – Present',
    title: 'Legal Counsel – Technology & Commercial Law',
    company: 'CWT · Remote, UK',
    description:
      'Supported a digital product and software development company on legal, commercial, and regulatory matters. Assisted with contract drafting and review, client documentation, intellectual property considerations, data privacy issues, and risk management for web, mobile, cloud, and blockchain technology projects.',
    icon: '/images/company.png',
  },
  {
    period: 'Aug 2024 – Sep 2025',
    title: 'Legal Consultant – IP & Corporate Law',
    company: 'Premier Law Firm · Nigeria',
    description:
      'Conducted legal research across intellectual property, corporate, and commercial law. Drafted and reviewed contracts, MOUs, licensing agreements, and compliance documentation, while supporting due diligence, IP risk assessments, and dispute resolution matters.',
    icon: '/images/agency.png',
  },
  {
    period: 'Aug 2023 – Jul 2024',
    title: 'Legal Assistant – Regulatory & Litigation Support',
    company: 'State High Court · Nigeria',
    description:
      'Prepared legal opinions, case summaries, procedural documents, and formal correspondence. Supported judicial research, maintained structured case files, and monitored deadlines across multiple hearings and proceedings.',
    icon: '/images/company.png',
  },
  {
    period: 'Aug 2019 – Apr 2022',
    title: 'Legal Officer – Research & Compliance',
    company: 'Blessings Chambers, Iyanu Olumuagun & Associates · Nigeria',
    description:
      'Researched case law, statutes, and regulatory frameworks with a focus on commercial and compliance-related matters. Drafted contracts, affidavits, pleadings, and other legal documents, while supporting trial preparation and document review.',
    icon: '/images/startup.png',
  },
];

  return (
    <section id="experience" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="exp-sticky text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Take a look at my{' '}
              <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">
                professional experience
              </span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              Over five years of legal experience across intellectual property, corporate and commercial law, regulatory compliance, litigation support, and legal research. My work combines practical legal drafting, case analysis, due diligence support, and a growing focus on IP, data law, and legal technology.
            </p>
            <Button
              className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
              onClick={() =>
                (window.location.href = 'mailto:oluwatofunmisin4@gmail.com')
              }
            >
              <FileText className="w-5 h-5" />
              Request full CV
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-card bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]"
              >
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                  <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Image
                      src={exp.icon || '/placeholder.svg'}
                      alt={exp.title}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-[#6366F1] font-semibold mb-2">
                    {exp.company}
                  </p>
                  <p className="text-[#393939] text-base md:text-[18px] leading-relaxed md:leading-[30px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
