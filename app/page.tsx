import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { TreatmentsSection } from "@/components/sections/treatments"
import { DoctorSection } from "@/components/sections/doctor"
import { TeamSection } from "@/components/sections/team"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <DoctorSection />
       {/* <TeamSection /> */}
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
