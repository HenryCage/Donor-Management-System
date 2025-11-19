import Navbar from "../components/Navbar"
import HeroSection from "../components/Hero"
import MissionSection from "../components/Mission"
import FeatureSection from "../components/Feature"
import ServicesSection from "../components/Services"
import ContactSection from "../components/Contact"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex justify-center py-5">
        <div className="w-full flex flex-col max-w-6xl px-4 sm:px-10">
          <HeroSection />
          <MissionSection />
          <FeatureSection />
          <ServicesSection />
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home