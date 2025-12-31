import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-indigo-300 transition">Home</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-indigo-300 transition">Projects</Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-indigo-300 transition">Skills</Link>
          </li>
          <li>
            <Link to="/work" className="hover:text-indigo-300 transition">Work</Link>
          </li>
          <li>
            <Link to="/other" className="hover:text-indigo-400 transition">Other</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
