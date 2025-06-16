import { StarBorder } from "@/components/ui/star-border";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <StarBorder
          as="a"
          href="https://t.me/your_telegram_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-105"
          color="#ffffff"
          speed="8s"
        >
          <div className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-lg">
            <i className="bi bi-telegram text-2xl"></i>
            <span className="font-semibold">Написать в Telegram</span>
          </div>
        </StarBorder>
      </div>
    </section>
  );
};

export default ContactSection;
