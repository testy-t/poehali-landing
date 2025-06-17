import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ProgramConditions from "@/components/ProgramConditions";
import IncomeCalculator from "@/components/IncomeCalculator";
import FAQ from "@/components/FAQ";
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

      {/* CTA Button - same style as HeroSection */}
      <div className="text-center mb-40">
        <RainbowButton className="mx-auto flex items-center gap-2">
          <Icon name="Rocket" size={20} />
          Начать проект
        </RainbowButton>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Index;
