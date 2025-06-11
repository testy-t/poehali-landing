import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ProgramConditions = () => {
  return (
    <section id="terms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Условия программы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выгодные условия для разных типов клиентов с долгосрочными выплатами
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* B2C клиенты */}
          <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-bl-full opacity-10"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  B2C клиенты
                </CardTitle>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  Физлица
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Условия по годам */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-800 font-bold text-sm">1</span>
                    </div>
                    <span className="font-semibold text-gray-900">1-й год</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">15%</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-800 font-bold text-sm">2</span>
                    </div>
                    <span className="font-semibold text-gray-900">2-й год</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">10%</span>
                </div>
              </div>

              {/* Особенности */}
              <div className="space-y-3">
                <div className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="mr-3 text-green-600 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">
                    Автоматическая регистрация по вашей ссылке
                  </span>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="mr-3 text-green-600 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">
                    Мгновенное зачисление в систему
                  </span>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="mr-3 text-green-600 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">Без минимального чека</span>
                </div>
              </div>

              {/* Пример дохода */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                <div className="text-sm opacity-90 mb-1">Пример дохода:</div>
                <div className="text-xl font-bold">12 000₽/мес</div>
                <div className="text-sm opacity-90">
                  при 10 клиентах × 8000₽
                </div>
              </div>
            </CardContent>
          </Card>

          {/* B2B клиенты */}
          <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-purple-200">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-bl-full opacity-10"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  B2B клиенты
                </CardTitle>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                  Юрлица
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Условия по годам */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-purple-800 font-bold text-sm">
                        1
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900">1-й год</span>
                  </div>
                  <span className="text-2xl font-bold text-purple-600">
                    20%
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-purple-800 font-bold text-sm">
                        2
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900">2-й год</span>
                  </div>
                  <span className="text-2xl font-bold text-purple-600">
                    10%
                  </span>
                </div>
              </div>

              {/* Особенности */}
              <div className="space-y-3">
                <div className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="mr-3 text-green-600 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">
                    Персональная поддержка при онбординге
                  </span>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="mr-3 text-green-600 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">
                    Приоритетная техподдержка
                  </span>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="Heart"
                    size={16}
                    className="mr-3 text-orange-500 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">
                    Бонус 50% за первое пополнение
                  </span>
                </div>
              </div>

              {/* Пример дохода */}
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
                <div className="text-sm opacity-90 mb-1">Пример дохода:</div>
                <div className="text-xl font-bold">85 000₽/мес</div>
                <div className="text-sm opacity-90">
                  при 5 клиентах × 85 000₽
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Прогрессивная система */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Прогрессивная система вознаграждений
          </h3>
          <p className="text-gray-600">
            Больше зарабатываете — выше процент вознаграждения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={24} className="text-gray-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Стартовый</h4>
              <p className="text-sm text-gray-600 mb-3">до 50 000₽/мес</p>
              <div className="text-lg font-semibold text-gray-900">
                Базовая ставка
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-gray-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Medal" size={24} className="text-gray-700" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Серебряный</h4>
              <p className="text-sm text-gray-600 mb-3">
                50 000 - 200 000₽/мес
              </p>
              <div className="text-lg font-semibold text-green-600">
                +5% к ставке
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-yellow-100">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-yellow-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Crown" size={24} className="text-yellow-700" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Золотой</h4>
              <p className="text-sm text-gray-600 mb-3">от 200 000₽/мес</p>
              <div className="text-lg font-semibold text-orange-600">
                +10% к ставке
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramConditions;
