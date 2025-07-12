import { RainbowButton } from "@/components/ui/rainbow-button";
import Icon from "@/components/ui/icon";
import { BlurFade } from "@/components/ui/blur-fade";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const HeroSection = () => {
  return (
    <section id="hero">
      <HeroGeometric
        badge=""
        title1=""
        title2=""
        buttonText="Начать 👇🏼"
        buttonClassName="bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg mx-auto block"
        buttonAction={() =>
          window.open("https://t.me/m/hEQRio2kNmFi", "_blank")
        }
      />
    </section>
  );
};

export default HeroSection;