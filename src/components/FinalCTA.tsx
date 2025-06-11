import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Готовы стать партнером?</h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Обсудите условия партнерства и начните зарабатывать уже сегодня
        </p>

        <Button
          size="lg"
          className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          onClick={() => window.open("https://t.me/m/hEQRio2kNmFi", "_blank")}
        >
          Написать в Telegram
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
