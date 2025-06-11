import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">П</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Poehali.dev</span>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Как работает
            </a>
            <a
              href="#conditions"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Условия
            </a>
            <a
              href="#calculator"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Калькулятор
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Вход для партнеров
            </a>
          </nav>

          {/* CTA кнопка */}
          <div className="flex items-center space-x-4">
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white px-6"
              onClick={() =>
                document
                  .getElementById("final-cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Стать партнером
            </Button>

            {/* Мобильное меню */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
