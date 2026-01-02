import ProjectCard from '../components/ProjectCard.jsx'

const projects = [
  {
    title: 'BudgetBarshelf',
    description: `BudgetBarshelf is a desktop application designed to help users compare alcoholic beverages sold by the Finnish state-owned liquor store, Alko.
     The application provides an "all in one" platform for browsing products by value and community ratings,
      with the added functionality of working as a "cocktail guide", helping you discover cocktails to make with the ingredients you have at home.`,
    tech: ['Python', 'PyQt6', 'Pandas'],
    githubLink: 'https://github.com/oskuuh43/BudgetBarshelf',
    liveLink: 'https://github.com/oskuuh43/BudgetBarshelf/releases/tag/v1.0.0',
  },
]

export default function ProjectsPage() {
  return (
    <div className="p-8 flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.githubLink || project.title} {...project} />
      ))}
    </div>
  )
}
