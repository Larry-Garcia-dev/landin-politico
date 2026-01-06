import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import RegistrationForm from "@/components/registration-form"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <RegistrationForm />
      <Footer />
    </main>
  )
}
