import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Как отслеживаются мои клиенты?",
    answer:
      "Каждый клиент, зарегистрировавшийся по вашей уникальной ссылке, автоматически привязывается к вашему аккаунту. В личном кабинете вы видите подробную статистику: количество переходов, регистраций, активных клиентов и сумму комиссий в реальном времени.",
  },
  {
    question: "Когда происходят выплаты?",
    answer:
      "Выплаты происходят автоматически каждый месяц до 10 числа. Минимальная сумма для выплаты - 5000₽. Если сумма меньше, она переносится на следующий месяц. Выплаты можно получать на банковскую карту, электронный кошелек или расчетный счет ИП/ООО.",
  },
  {
    question: "Что если клиент перестал пополнять и вернулся?",
    answer:
      "Если ваш клиент не пополнял аккаунт более 6 месяцев, а затем вернулся, он все еще остается привязанным к вам. Комиссия начисляется в соответствии с изначальными условиями - 15% для B2C и 20% для B2B в первый год, 10% во второй.",
  },
  {
    question: "Могу ли я рекламировать сервис?",
    answer:
      "Да, вы можете продвигать Poehali.dev любыми доступными способами: в социальных сетях, блогах, YouTube, подкастах, email-рассылках. Мы предоставляем готовые баннеры, видео-материалы и тексты для рекламы. Запрещена только контекстная реклама по брендовым запросам.",
  },

  {
    question: "Есть ли ограничения на количество привлеченных клиентов?",
    answer:
      "Никаких ограничений нет. Чем больше клиентов вы привлекаете, тем выше ваш доход. При достижении определенных показателей действует прогрессивная система - увеличиваются проценты комиссии и открываются дополнительные бонусы.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-b from-slate-50 to-white px-6"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о партнерской программе
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-slate-200 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
