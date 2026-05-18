import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function PortfolioSection() {
  const projects = [
    {
      title: 'Farm Alert: Animal Farm Application',
      description:
        'Led the full project lifecycle as Technical Project Manager for a mobile application designed to monitor and manage animal farm operations. Coordinated cross-functional teams, managed stakeholder expectations, and ensured on-time delivery in a remote environment.',
      tag: 'Technical Project Management',
      company: 'Farm Alert',
      period: 'Oct 2022 – Dec 2024',
      bgColor: 'bg-[#6366F1]',
      illustration: '/images/work.png',
    },
    {
      title: 'DVO: Decentralised Voting Application',
      description:
        'Managed the end-to-end delivery of a decentralised voting platform as Project Manager. Oversaw product development, program management, and stakeholder coordination to successfully ship a blockchain-based voting solution.',
      tag: 'Project Management',
      company: 'DVO',
      period: 'Jun 2021 – Jul 2022',
      bgColor: 'bg-[#2F81F7]',
      illustration: '/images/studio-workspace.svg',
    },
  ];

  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">
              key projects
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold text-gray-500">
                    {project.company} · {project.period}
                  </span>
                </div>

                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
                  {project.tag}
                </span>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-[#393939] mb-8 leading-relaxed md:leading-[30px] font-medium">
                  {project.description}
                </p>

                <a
                  href="mailto:oluwatofunmisin4@gmail.com"
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                >
                  Enquire about this work
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div
                className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[500px]`}
              >
                <Image
                  src={project.illustration || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
