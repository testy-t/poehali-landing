import { RainbowButton } from "@/components/ui/rainbow-button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto text-center px-6 mb-10">
        <RainbowButton
          className="mx-auto flex items-center gap-2"
          onClick={() => window.open("https://t.me/FermerCoders", "_blank")}
        >
          <Icon name="Send" size={20} />
          Написать в Telegram
        </RainbowButton>
      </div>
    </section>
  );
};

export default ContactSection;
