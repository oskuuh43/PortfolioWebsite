export default function WorkExperienceCard({ company, role, period, description }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-2xl font-semibold">{role}</h3>
      <p className="text-gray-400">{company} | {period}</p>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  );
}
