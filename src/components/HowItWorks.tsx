import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const steps = [
  {
    icon: "UserPlus",
    title: "Регистрация",
    description: "Получите уникальную реферальную ссылку за 1 минуту",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: "Share2",
    title: "Привлечение",
    description: "Делитесь ссылкой с аудиторией, размещайте в соцсетях",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: "TrendingUp",
    title: "Заработок",
    description: "Получайте % с каждого пополнения энергии вашими клиентами",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: "Banknote",
    title: "Выплаты",
    description: "Автоматические выплаты каждый месяц от 5000₽",
    color: "bg-orange-100 text-orange-600",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простой процесс в 4 шага до получения первого дохода
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  {/* Иконка */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon name={step.icon as any} size={28} />
                  </div>

                  {/* Номер шага */}
                  <div className="text-sm font-semibold text-purple-600 mb-2">
                    Шаг {index + 1}
                  </div>

                  {/* Заголовок */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Описание */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Стрелка между шагами */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <Icon
                    name="ArrowRight"
                    size={24}
                    className="text-purple-300"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <div className="bg-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Начните зарабатывать прямо сейчас
            </h3>
            <p className="text-gray-600 mb-6">
              Среднее время от регистрации до первого дохода составляет всего 7
              дней
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Icon name="Clock" size={16} className="mr-2 text-purple-600" />
                Быстрая регистрация
              </div>
              <div className="flex items-center">
                <Icon
                  name="Shield"
                  size={16}
                  className="mr-2 text-purple-600"
                />
                Гарантированные выплаты
              </div>
              <div className="flex items-center">
                <Icon
                  name="BarChart"
                  size={16}
                  className="mr-2 text-purple-600"
                />
                Растущий доход
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
