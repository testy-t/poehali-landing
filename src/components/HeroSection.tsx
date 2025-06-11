import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const HeroSection = () => {
  const words = [
    { text: "Зарабатывайте" },
    { text: "больше" },
    { text: "вместе" },
    { text: "с" },
    {
      text: "Poehali.dev",
      className: "text-[#fbb040]",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center"
    >
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={3}
        gridGap={7}
        color="#9333ea"
        maxOpacity={0.1}
        flickerChance={0.05}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Партнёрская программа
          </h1>

          <TypewriterEffectSmooth
            words={words}
            className="justify-center"
            cursorClassName="bg-purple-600"
          />

          <div className="flex flex-col items-center space-y-8 mt-12">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Начать
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>

            <Icon
              name="ChevronDown"
              size={32}
              className="text-purple-600 animate-bounce"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
