export default function OtherInfoPage() {
  const education = [
    {
      degree: "Master of Science, Computer Engineering",
      institution: "Åbo Akademi University",
      period: "Aug 2024 - Present",
    },
    {
      degree: "Bachelor of Science, Computer Engineering",
      institution: "Åbo Akademi University",
      period: "Aug 2021 - May 2024",
    },
  ];

  const languages = [
    { language: "Finnish", level: "Native" },
    { language: "Swedish", level: "Native" },
    { language: "English", level: "Fluent" },
    { language: "German", level: "Basics" },
  ];

  const hobbies = [
    { hobby: "Gaming" },
    { hobby: "Programming" },
    { hobby: "Weightlifting" },
    { hobby: "Running" },
  ];

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-12">Other Information</h1>

      {/* Education Section */}
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <ul className="space-y-4">
          {education.map((edu, index) => (
            <li key={index} className="bg-gray-800 rounded-lg p-4 shadow-md">
              <p className="font-medium">{edu.degree}</p>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-gray-400 text-sm">{edu.period}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Languages Section */}
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Languages</h2>
        <ul className="space-y-2">
          {languages.map((lang, index) => (
            <li key={index} className="bg-gray-800 rounded-lg p-4 shadow-md">
              <p className="font-medium">{lang.language}</p>
              <p className="text-gray-300">{lang.level}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Hobbies Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Hobbies</h2>
        <ul className="space-y-4">
          {hobbies.map((h, index) => (
            <li
              key={index}
              className="bg-gray-800 rounded-lg p-4 shadow-md"
            >
              <p className="text-gray-300">{h.hobby}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
