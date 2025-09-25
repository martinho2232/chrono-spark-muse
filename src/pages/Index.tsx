import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { ProductSection } from "@/components/ProductSection";
import { IncludedSection } from "@/components/IncludedSection";
import { BonusSection } from "@/components/BonusSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { UrgencySection } from "@/components/UrgencySection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <ProductSection />
      <IncludedSection />
      <BonusSection />
      <TestimonialsSection />
      <UrgencySection />
      <GuaranteeSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
