import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function PortfolioSection() {
 const projects = [
  {
    title: 'Contract Risk Analyzer',
    description:
      'Contract Risk Analyzer is a LegalTech and data science web application that performs a basic legal risk screening of contract text. The tool checks whether key contract clauses are present, weak, or missing, including payment terms, termination, confidentiality, limitation of liability, indemnity, governing law, dispute resolution, intellectual property, data protection, force majeure, assignment, and restrictive covenants.',
    tag: 'pandas· Streamlit · Python · ReportLab · Regular Expressions',
    company: 'Legal Tech Project',
    period: '2026',
    bgColor: 'bg-[#6366F1]',
    illustration: '/images/cra.png',
    link: 'https://contract-risk-analyzer-vgqphapmcsa6nx25aeenyb.streamlit.app/'
  },
  {
    title: 'GDPR Privacy Policy Analyzer',
    description:
      'GDPR Privacy Policy Analyzer is a LegalTech web app that screens privacy policies for key GDPR transparency requirements. It uses keyword-based text analysis to classify policy sections as Strong, Weak, or Missing, extracts evidence, provides legal recommendations, and generates downloadable CSV and PDF reports.',
    tag: 'pandas· Streamlit · Python · ReportLab',
    company: 'Legal Tech Project',
    period: '2026',
    bgColor: 'bg-[#6366F1]',
    illustration: '/images/gdpr.png',
    link: 'https://gdpr-privacy-policy-analyzer-fh4ynkvxkk2v62xhd3nevs.streamlit.app/'

  },
  {
    title: 'Nigeria Legal Case Summarizer',
    description:
      'Built a legal tech web app that uses Natural Language Processing to automatically summarise Nigerian legal cases, helping users quickly identify key facts, holdings, and outcomes. The project combines legal research experience with practical software development.',
    tag: 'NLP · Python · Streamlit',
    company: 'Legal Tech Project',
    period: '2025',
    bgColor: 'bg-[#6366F1]',
    illustration: '/images/sum.png',
    link: 'mailto:oluwatofunmisin4@gmail.com'
  },
  {
    title: 'Ride Fare Estimator',
    description:
      'Developed a machine learning model trained on real-world taxi data to predict ride fares. The project involved data cleaning, feature engineering, model training, and evaluation, showing practical experience with data-driven systems.',
    tag: 'Python · Jupyter Notebook · Machine Learning',
    company: 'Data Science Project',
    period: '2025',
    bgColor: 'bg-[#2F81F7]',
    illustration: '/images/fare.png',
    link: 'mailto:oluwatofunmisin4@gmail.com'
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
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
