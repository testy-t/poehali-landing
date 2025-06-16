import { StarBorder } from "@/components/ui/star-border";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Свяжитесь с нами в Telegram и запустите свою партнерскую программу уже
          сегодня
        </p>

        <StarBorder
          as="a"
          href="https://t.me/m/hEQRio2kNmFi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-105"
          color="#0088cc"
          speed="8s"
        >
          <div className="flex items-center gap-3">
            <i className="bi bi-telegram text-2xl text-blue-500"></i>
            <span className="font-semibold">Начать работу</span>
          </div>
        </StarBorder>
      </div>
    </section>
  );
};

export default ContactSection;
