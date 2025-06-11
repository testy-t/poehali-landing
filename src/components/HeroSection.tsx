import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { BlurFade } from "@/components/ui/blur-fade";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex items-center"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <BlurFade delay={0.25} inView>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Зарабатывайте больше 🚀
            </h1>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              вместе с poehali.dev
            </p>
          </BlurFade>

          <BlurFade delay={0.75} inView>
            <div className="flex flex-col items-center space-y-8">
              <Button
                size="lg"
                className="bg-[#fbb040] hover:bg-[#f4a832] text-white px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                Начать
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>

              <Icon
                name="ChevronDown"
                size={32}
                className="text-[#fbb040] animate-bounce"
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
