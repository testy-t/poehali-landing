import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ProgramConditions from "@/components/ProgramConditions";
import IncomeCalculator from "@/components/IncomeCalculator";
import FAQ from "@/components/FAQ";
import BottomNavigation from "@/components/BottomNavigation";
import { StarBorder } from "@/components/ui/star-border";
import { Icon } from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <ProgramConditions />
      <IncomeCalculator />
      <FAQ />

      {/* Star Border Button - moved higher */}
      <div className="text-center mb-40">
        <StarBorder className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
          <Icon name="Rocket" size={20} />
          Начать проект
        </StarBorder>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Index;
