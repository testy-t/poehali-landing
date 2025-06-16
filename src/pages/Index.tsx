import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ProgramConditions from "@/components/ProgramConditions";
import IncomeCalculator from "@/components/IncomeCalculator";
import FAQ from "@/components/FAQ";
import BottomNavigation from "@/components/BottomNavigation";
import { StarBorder } from "@/components/ui/star-border";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <ProgramConditions />
      <IncomeCalculator />
      <FAQ />

      {/* Star Border Button - moved higher */}
      <div className="flex justify-center mb-16">
        <StarBorder className="bg-black text-white border-white/20 hover:bg-gray-900">
          <span className="font-medium">Связаться в Телеграм</span>
        </StarBorder>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Index;
