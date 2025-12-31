import { RainbowButton } from "@/components/ui/rainbow-button";
import Icon from "@/components/ui/icon";
import { BlurFade } from "@/components/ui/blur-fade";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import PaymentButton from "@/components/extensions/yookassa/PaymentButton";

const HeroSection = () => {
  return (
    <section id="hero">
      <HeroGeometric
        badge=""
        title1={
          <span>
            <span className="text-zinc-700">Получайте </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">больше!</span>
          </span>
        }
        title2="вместе с poehali.dev"
      />
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 max-w-2xl mx-auto px-4">
        <PaymentButton
          apiUrl="https://functions.poehali.dev/916b97fc-40d8-48b4-9a4f-e8e070052e35"
          amount={1500}
          userEmail="test@example.com"
          returnUrl={window.location.origin + "/success"}
          buttonText="Оплатить 1500 ₽"
          className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg px-8 py-3 text-lg font-semibold"
          onSuccess={(orderNumber) => console.log('Заказ создан:', orderNumber)}
        />
        
        <button
          onClick={() => window.open("https://wa.me/", "_blank")}
          className="bg-green-500 text-white hover:bg-green-600 rounded-lg px-8 py-3 text-lg font-semibold"
        >
          Написать в WhatsApp
        </button>
      </div>
    </section>
  );
};

export default HeroSection;