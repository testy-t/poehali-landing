import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { TextRotate } from "@/components/ui/text-rotate";

const HeroSection = () => {
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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Зарабатывайте{" "}
            <TextRotate
              texts={["больше"]}
              mainClassName="text-black bg-[#fbb040] px-3 py-1 rounded-lg overflow-hidden inline-flex"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              auto={false}
            />
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            вместе с{" "}
            <a
              href="https://poehali.dev"
              className="font-semibold hover:underline transition-colors"
              style={{ color: "#fbb040" }}
            >
              poehali.dev
            </a>
          </p>

          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold"
          >
            Начать зарабатывать
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
