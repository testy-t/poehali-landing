import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь должна быть интеграция с CRM
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в течение 24 часов.");
  };

  const handleInputChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50"
    >
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Начните зарабатывать уже сегодня
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Присоединяйтесь к партнерской программе и превратите вашу
              аудиторию в стабильный источник дохода
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Преимущества */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={24} className="text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Быстрый старт</h3>
                    <p className="text-purple-100">
                      Получите партнерскую ссылку через 5 минут после
                      регистрации
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="TrendingUp"
                      size={24}
                      className="text-green-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Растущий доход</h3>
                    <p className="text-purple-100">
                      Доход увеличивается с каждым новым пополнением клиента
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Гарантия выплат</h3>
                    <p className="text-purple-100">
                      Более 15 миллионов рублей уже выплачено партнерам
                    </p>
                  </div>
                </div>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">
                    2 года
                  </div>
                  <div className="text-purple-200 text-sm">
                    длительность выплат
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">
                    до 30%
                  </div>
                  <div className="text-purple-200 text-sm">
                    максимальная комиссия
                  </div>
                </div>
              </div>
            </div>

            {/* Форма регистрации */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Заявка на участие
                  </h3>
                  <p className="text-purple-100">
                    Заполните форму и станьте партнером за 24 часа
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">
                      Ваше имя *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange("name")}
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                      placeholder="Введите ваше имя"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange("email")}
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white mb-2 block">
                      Телефон *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange("phone")}
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>

                  <div>
                    <Label htmlFor="source" className="text-white mb-2 block">
                      Откуда узнали о нас?
                    </Label>
                    <select
                      id="source"
                      value={formData.source}
                      onChange={handleInputChange("source")}
                      className="w-full h-10 px-3 py-2 bg-white/10 border border-white/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="" className="text-gray-900">
                        Выберите источник
                      </option>
                      <option value="social" className="text-gray-900">
                        Социальные сети
                      </option>
                      <option value="search" className="text-gray-900">
                        Поисковые системы
                      </option>
                      <option value="blog" className="text-gray-900">
                        Блог/статья
                      </option>
                      <option value="recommendation" className="text-gray-900">
                        Рекомендация
                      </option>
                      <option value="advertising" className="text-gray-900">
                        Реклама
                      </option>
                      <option value="other" className="text-gray-900">
                        Другое
                      </option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-purple-700 hover:bg-gray-100 font-semibold py-4"
                  >
                    Стать партнером
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>

                  <p className="text-xs text-purple-200 text-center">
                    Нажимая кнопку, вы соглашаетесь с условиями партнерской
                    программы
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
