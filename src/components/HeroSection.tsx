import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { BlurFade } from "@/components/ui/blur-fade";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { StarBorder } from "@/components/ui/star-border";

const HeroSection = () => {
  return (
    <section id="hero">
      <HeroGeometric
        badge=""
        title1={
          <span>
            <span className="text-zinc-700">Получайтеее </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              больше
            </span>
          </span>
        }
        title2="вместе с poehali.dev"
        buttonText="Начать 👇🏼"
        buttonClassName="bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg mx-auto block"
      />

      <div className="flex justify-center mt-8 dark">
        <StarBorder
          as="a"
          href="https://t.me/m/hEQRio2kNmFi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform"
        >
          Присоединиться к сообществу 🚀
        </StarBorder>
      </div>
    </section>
  );
};

export default HeroSection;
