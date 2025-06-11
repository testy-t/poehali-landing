import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    question: "Как отслеживаются мои клиенты?",
    answer:
      "Каждый клиент автоматически привязывается к вашему аккаунту по уникальной ссылке.",
  },
  {
    question: "Когда происходят выплаты?",
    answer: "Выплаты автоматически каждый месяц до 10 числа. Минимум 5000₽.",
  },
  {
    question: "Могу ли я рекламировать сервис?",
    answer:
      "Да, любыми способами кроме контекстной рекламы по брендовым запросам.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Частые вопросы
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <Button
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() =>
                window.open("https://t.me/m/hEQRio2kNmFi", "_blank")
              }
            >
              Задать вопрос в Telegram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
