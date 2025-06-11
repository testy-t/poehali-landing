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
        <FeatureSteps features={features} title="Как это работает" />
      </div>
    </section>
  );
};

export default HowItWorks;
