import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ProductsSection from "@/components/products-section"
import ContactSection from "@/components/contact-section"
import InquirySection from "@/components/inquiry-section"
import ReviewSection from "@/components/review-section"
import OwnerSection from "@/components/owner-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ContactSection />
      <InquirySection />
      <ReviewSection />
      <OwnerSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
