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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <ProgramConditions />
      <IncomeCalculator />
      <FAQ />
      <ContactSection />

      {/* Debug Admin Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link to="/admin">
          <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
            <Icon name="Settings" size={16} className="mr-2" />
            Админка
          </Button>
        </Link>
      </div>

      {/* CTA Button removed */}
      <BottomNavigation />
    </div>
  );
};

export default Index;