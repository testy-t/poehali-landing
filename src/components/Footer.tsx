import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Логотип и описание */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">П</span>
              </div>
              <span className="text-xl font-bold">Poehali.dev</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Партнерская программа инновационного сервиса для разработки
              сайтов. Зарабатывайте до 30% с каждого привлеченного клиента.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="https://t.me/+QgiLIa1gFRY4Y2Iy"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Icon name="Send" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          {/* Партнерам */}
          <div>
            <h4 className="font-bold text-lg mb-4">Партнерам</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Как работает
                </a>
              </li>
              <li>
                <a
                  href="#conditions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Условия программы
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Калькулятор дохода
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Личный кабинет
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Маркетинговые материалы
                </a>
              </li>
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h4 className="font-bold text-lg mb-4">Поддержка</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://docs.poehali.dev"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Документация
                </a>
              </li>
              <li>
                <a
                  href="mailto:partners@poehali.dev"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Техподдержка
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/+QgiLIa1gFRY4Y2Iy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Сообщество
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Статус выплат
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Poehali.dev. Все права защищены.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Пользовательское соглашение
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="https://poehali.dev"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Основной сайт
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
