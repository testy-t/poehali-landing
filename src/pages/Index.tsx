import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ProgramConditions from "@/components/ProgramConditions";
import IncomeCalculator from "@/components/IncomeCalculator";
import FAQ from "@/components/FAQ";
import BottomNavigation from "@/components/BottomNavigation";
import { StarBorder } from "@/components/ui/star-border";
import Icon from "@/components/ui/icon";

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
        <button className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg mx-auto block px-6 py-3 font-medium transition-colors duration-200 inline-flex items-center gap-2">
          <Icon name="Rocket" size={20} />
          Начать проект
        </button>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Index;
