import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Бейдж */}
          <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200">
            <Icon name="Sparkles" size={14} className="mr-1" />
            Партнерская программа
          </Badge>

          {/* Заголовок */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Зарабатывайте до{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              30%
            </span>{" "}
            с каждого клиента Poehali.dev
          </h1>

          {/* Подзаголовок */}
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Рекомендуйте инновационный сервис для разработчиков и получайте
            стабильный пассивный доход до 2 лет
          </p>

          {/* CTA и преимущества */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold"
              onClick={() =>
                document
                  .getElementById("final-cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Начать зарабатывать
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>

            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center text-green-700">
                <Icon name="Check" size={16} className="mr-2 text-green-600" />
                Без вложений
              </div>
              <div className="flex items-center text-green-700">
                <Icon name="Check" size={16} className="mr-2 text-green-600" />
                Выплаты каждый месяц
              </div>
              <div className="flex items-center text-green-700">
                <Icon name="Check" size={16} className="mr-2 text-green-600" />
                Прозрачная статистика
              </div>
            </div>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Активных партнеров</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                15M₽
              </div>
              <div className="text-gray-600">Выплачено партнерам</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Довольных партнеров</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
