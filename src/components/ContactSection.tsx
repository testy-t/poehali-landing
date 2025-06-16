import { StarBorder } from "@/components/ui/star-border";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Есть вопросы?</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Свяжитесь с нами в Telegram и получите персональную консультацию по
          партнерской программе
        </p>

        <StarBorder
          as="a"
          href="https://t.me/your_telegram_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-105"
          color="#0088cc"
          speed="8s"
        >
          <div className="flex items-center gap-3">
            <i className="bi bi-telegram text-2xl text-blue-500"></i>
            <span className="font-semibold">Написать в Telegram</span>
          </div>
        </StarBorder>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="bi bi-clock text-primary text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Быстрый ответ</h3>
            <p className="text-sm text-muted-foreground">
              Отвечаем в течение часа в рабочее время
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="bi bi-person-check text-primary text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Персональная помощь</h3>
            <p className="text-sm text-muted-foreground">
              Индивидуальный подход к каждому партнеру
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="bi bi-shield-check text-primary text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Надежная поддержка</h3>
            <p className="text-sm text-muted-foreground">
              Полное сопровождение на всех этапах
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
