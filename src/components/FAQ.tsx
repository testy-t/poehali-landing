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
    question: "Какие маркетинговые материалы вы предоставляете?",
    answer:
      "В партнерском кабинете доступны: баннеры различных размеров, видео-презентации, описания сервиса для постов, email-шаблоны, логотипы в разных форматах, скриншоты интерфейса. Материалы регулярно обновляются, добавляются сезонные акции и спецпредложения.",
  },
  {
    question: "Есть ли ограничения на количество привлеченных клиентов?",
    answer:
      "Никаких ограничений нет. Чем больше клиентов вы привлекаете, тем выше ваш доход. При достижении определенных показателей действует прогрессивная система - увеличиваются проценты комиссии и открываются дополнительные бонусы.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о партнерской программе
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-purple-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Дополнительная помощь */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Не нашли ответ на свой вопрос?
              </h3>
              <p className="text-gray-600 mb-6">
                Наша команда поддержки готова помочь вам 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:partners@poehali.dev"
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Написать в поддержку
                </a>
                <a
                  href="https://t.me/+QgiLIa1gFRY4Y2Iy"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Telegram сообщество
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
