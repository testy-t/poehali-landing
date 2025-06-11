import { FeatureSteps } from "@/components/ui/feature-section";

const features = [
  {
    step: "Шаг 1",
    title: "Регистрация",
    content: "Получите уникальную реферальную ссылку за 1 минуту",
    icon: "UserPlus",
    color: "bg-blue-100 text-blue-600",
  },
  {
    step: "Шаг 2",
    title: "Привлечение",
    content: "Делитесь ссылкой с аудиторией, размещайте в соцсетях",
    icon: "Share2",
    color: "bg-green-100 text-green-600",
  },
  {
    step: "Шаг 3",
    title: "Заработок",
    content: "Получайте % с каждого пополнения энергии вашими клиентами",
    icon: "TrendingUp",
    color: "bg-purple-100 text-purple-600",
  },
  {
    step: "Шаг 4",
    title: "Выплаты",
    content: "Автоматические выплаты каждый месяц от 5000₽",
    icon: "Banknote",
    color: "bg-orange-100 text-orange-600",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FeatureSteps
          features={features}
          title="Как это работает"
          autoPlayInterval={4000}
        />

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
