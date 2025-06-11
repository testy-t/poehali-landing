import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ProgramConditions from "@/components/ProgramConditions";
import IncomeCalculator from "@/components/IncomeCalculator";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <ProgramConditions />
      <IncomeCalculator />
      <FAQ />
      <FinalCTA />
      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default Index;
