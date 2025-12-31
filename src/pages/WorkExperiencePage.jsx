import WorkExperienceCard from '../components/WorkExperienceCard.jsx'

const experiences = [
  {
    company: 'Visma Aquila Oy',
    role: `Master's Thesis Worker`,
    period: 'Oct 2025 - Present',
    description: `Currently writing my Master's Thesis for the company.`
  },
  {
    company: 'Javian Oy Ab',
    role: 'Software Developer - Part-time',
    period: 'Aug 2025 - Present',
    description: `I have continued working part-time on the deployment of the sales tool and supporting other IT tasks based on the company's needs.`
  },
  {
    company: 'Javian Oy Ab',
    role: 'Software Developer',
    period: 'May 2025 - Aug 2025',
    description: `My main responsibilities included the implementation and deployment of a sales tool for trailers, as well as supporting other IT-related tasks within the company.`
  },
  {
    company: 'Bitjoiner Ab Oy',
    role: 'Summer Worker',
    period: 'Apr 2020 - Apr 2020',
    description: `Bitjoiner specializes in software development and IT consulting.
I familiarized myself with the company’s operations and gained insight into software development work.`
  },
]

export default function WorkExperiencePage() {
  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-12">Work Experience</h1>
      <div className="max-w-4xl mx-auto">
        {experiences.map(exp => (
          <WorkExperienceCard key={exp.company + exp.role} {...exp} />
        ))}
      </div>
    </div>
  );
}
