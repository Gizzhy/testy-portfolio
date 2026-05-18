'use client';

import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function ExperienceSection() {
  const experiences = [
    {
      period: 'Oct 2022 – Dec 2024',
      title: 'Technical Project Manager',
      company: 'Farm Alert · Freelance · Remote',
      description:
        'Led an application project for an animal farm. Managed the full project lifecycle remotely, applying organisation skills, program management, risk control, and cross-functional team coordination to deliver on time.',
      icon: '/images/agency.png',
    },
    {
      period: 'Jun 2021 – Jul 2022',
      title: 'Project Manager',
      company: 'DVO · Full-time · Remote',
      description:
        'Managed a decentralised voting application project. Oversaw product development, program management, stakeholder engagement, and end-to-end delivery of a blockchain-based voting platform.',
      icon: '/images/company.png',
    },
    {
      period: 'Feb 2020 – Apr 2021',
      title: 'Project Coordinator',
      company: 'CWT',
      description:
        'Coordinated development timelines for course landing pages and learning modules. Managed interactive challenges and student content rollouts. Supported community engagement through newsletters, events, and tutorials. Maintained brand consistency and release cadence working closely with developers and content creators.',
      icon: '/images/startup.png',
    },
    {
      period: 'May 2019 – Apr 2021',
      title: 'Junior Project Lead',
      company: 'CodeWithTy · Full-time · Lagos, Nigeria (Remote)',
      description:
        'Led junior project initiatives, supporting delivery management and coordinating development activities across remote teams in Nigeria.',
      icon: '/images/startup.png',
    },
    {
      period: 'Sep 2019 – Jan 2021',
      title: 'Project Manager',
      company: 'Team Decentralised Finance · Full-time · Nigeria (Hybrid)',
      description:
        'Managed projects within a decentralised finance team. Applied project management frameworks and project planning skills to coordinate deliverables, manage risks, and align team efforts.',
      icon: '/images/company.png',
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
                past experience
              </span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              Over 5 years of progressive project leadership across tech, DeFi,
              and education, delivering results as a PRINCE2 Practitioner across
              remote, hybrid, and on-site environments.
            </p>
            <Button
              className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
              onClick={() =>
                (window.location.href = 'mailto:omiremiTofunmi@gmail.com')
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
