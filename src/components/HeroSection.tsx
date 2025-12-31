import { RainbowButton } from "@/components/ui/rainbow-button";
import Icon from "@/components/ui/icon";
import { BlurFade } from "@/components/ui/blur-fade";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const HeroSection = () => {
  return (
    <section id="hero">
      <HeroGeometric
        badge=""
        title1={
          <span>
            <span className="text-zinc-700">Получайте </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">больше!</span>
          </span>
        }
        title2="вместе с poehali.dev"
        buttonText="Написать в WhatsApp"
        buttonClassName="bg-green-500 text-white hover:bg-green-600 rounded-lg mx-auto block"
        buttonAction={() =>
          window.open("https://wa.me/", "_blank")
        }
      />
    </section>
  );
};

export default HeroSection;