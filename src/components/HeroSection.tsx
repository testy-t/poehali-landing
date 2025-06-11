import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Зарабатывайте до <span className="text-purple-600">30%</span> с
            каждого клиента
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Партнерская программа Poehali.dev — рекомендуйте сервис и получайте
            стабильный доход
          </p>

          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
            onClick={() => window.open("https://t.me/m/hEQRio2kNmFi", "_blank")}
          >
            Обсудить партнерство
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
