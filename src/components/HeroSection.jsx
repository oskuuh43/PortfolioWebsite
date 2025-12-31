export default function HeroSection() {
  return (
    <section className="text-center py-16">
      <img
        src="/ProfilePic.jpg" 
        alt="Oskar Sundfors"
        className="w-48 h-48 mx-auto rounded-full mb-6 border-4 border-indigo-500"
      />
      <h1 className="text-5xl font-bold mb-4">Oskar Sundfors</h1>
      <p className="text-xl text-gray-300">
        A Software Engineer currently finalizing my Master's Degree in Computer Engineering
      </p>
    </section>
  )
}
