import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ProgramConditions from "@/components/ProgramConditions";
import IncomeCalculator from "@/components/IncomeCalculator";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import BottomNavigation from "@/components/BottomNavigation";
import { StarBorder } from "@/components/ui/star-border";
import Icon from "@/components/ui/icon";
import { RainbowButton } from "@/components/ui/rainbow-button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <ProgramConditions />
      <IncomeCalculator />
      <FAQ />
      <ContactSection />

      {/* CTA Button removed */}
      <BottomNavigation />
    </div>
  );
};

export default Index;
