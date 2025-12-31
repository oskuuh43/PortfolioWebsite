import AboutSection from '../components/AboutSection.jsx'
import HeroSection from '../components/HeroSection.jsx'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
    </div>
  )
}
