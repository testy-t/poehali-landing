import { RainbowButton } from "@/components/ui/rainbow-button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Готовы начать проект?
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Свяжитесь с нами в Telegram для обсуждения деталей
        </p>
        <RainbowButton
          className="mx-auto flex items-center gap-2"
          onClick={() => window.open("https://t.me/m/hEQRio2kNmFi", "_blank")}
        >
          <Icon name="Send" size={20} />
          Написать в Telegram
        </RainbowButton>
      </div>
    </section>
  );
};

export default ContactSection;
