export default function ContactSection() {
  return (
    <section className="text-center py-16 bg-gray-800 px-4">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-2">Email: <a href="mailto:your.email@example.com" className="text-indigo-400 hover:text-indigo-300 transition">your.email@example.com</a></p>
      <p className="text-gray-300 mb-2">GitHub: <a href="https://github.com/yourusername" target="_blank" className="text-indigo-400 hover:text-indigo-300 transition">github.com/yourusername</a></p>
      <p className="text-gray-300 mb-2">LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-indigo-400 hover:text-indigo-300 transition">linkedin.com/in/yourusername</a></p>
    </section>
  )
}
