export default function SkillsPage() {
  const skills = {
    "Programming Languages": [
      { name: "Python (Advanced)", description: "" },
      { name: "Java (Intermediate)", description: "" },
      { name: "JavaScript (Intermediate)", description: "" },
      { name: "C++ (Beginner)", description: "" },
      { name: "C (Beginner)", description: "" },
    ],
    "Frameworks & Libraries": [
      { name: "React (Intermediate)", description: "" },
      { name: "Node.js / Express.js (Intermediate)", description: "" },
      { name: "Flask (Intermediate)", description: "" },
      { name: "Tailwind CSS (Beginner)", description: "" },
    ],
    "Databases": [
      { name: "MongoDB (Beginner)", description: "" },
      { name: "MySQL / SQLite (Beginner)", description: "" },
    ],
    "Tools & Platforms": [
      { name: "Git / GitHub (Advanced)", description: "" },
      { name: "AWS (Beginner)", description: "" },
      { name: "WordPress (Beginner)", description: "" },
    ],
  }

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12">Skills</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-5">{category}</h2>
            <ul className="space-y-3">
              {items.map((skill) => (
                <li key={skill.name} className="text-left">
                  <p className="font-medium">{skill.name}</p>
                  <p className="text-gray-300 text-sm">{skill.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}