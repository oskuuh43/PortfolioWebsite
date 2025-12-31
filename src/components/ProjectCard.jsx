export default function ProjectCard({ title, description, tech = [], githubLink, liveLink }) {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col gap-6 w-full max-w-4xl mx-auto">
      <div className="text-center">
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>

      {/* Tech stack */}
      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-200"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex gap-6 justify-center">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 rounded hover:bg-indigo-500 transition"
          >
            GitHub
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 rounded hover:bg-green-500 transition"
          >
            Live
          </a>
        )}
      </div>
    </div>
  )
}