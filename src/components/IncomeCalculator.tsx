import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const IncomeCalculator = () => {
  const [b2cClients, setB2cClients] = useState([50]);
  const [b2bClients, setB2bClients] = useState([5]);

  // Фиксированные значения среднего чека
  const b2cAverageCheck = 2500;
  const b2bAverageCheck = 100000;

  // Прогрессивная система комиссий B2C
  const getB2cCommission = (clients: number) => {
    if (clients >= 80) return 0.15; // 15% для топ-партнеров
    if (clients >= 50) return 0.12; // 12% для активных
    if (clients >= 20) return 0.1; // 10% базовая ставка
    return 0.08; // 8% для новичков
  };

  // Прогрессивная система комиссий B2B
  const getB2bCommission = (clients: number) => {
    if (clients >= 15) return 0.25; // 25% для топ-партнеров
    if (clients >= 10) return 0.2; // 20% для активных
    if (clients >= 5) return 0.15; // 15% базовая ставка
    return 0.12; // 12% для новичков
  };

  // Расчет дохода с прогрессивными ставками
  const b2cCommissionRate = getB2cCommission(b2cClients[0]);
  const b2bCommissionRate = getB2bCommission(b2bClients[0]);

  const b2cMonthlyIncome = b2cClients[0] * b2cAverageCheck * b2cCommissionRate;
  const b2bMonthlyIncome = b2bClients[0] * b2bAverageCheck * b2bCommissionRate;
  const totalMonthlyIncome = b2cMonthlyIncome + b2bMonthlyIncome;
  const totalYearlyIncome = totalMonthlyIncome * 12;

  // Бонус за первое пополнение B2B (остается 50%)
  const b2bFirstTimeBonus = b2bClients[0] * b2bAverageCheck * 0.5;

  // Определение уровня партнера
  const getPartnerLevel = (b2cCount: number, b2bCount: number) => {
    const totalScore = b2cCount + b2bCount * 5; // B2B клиенты весят больше
    if (totalScore >= 120)
      return {
        name: "Топ-партнер",
        color: "text-yellow-600",
        bg: "bg-yellow-50",
      };
    if (totalScore >= 75)
      return { name: "Активный", color: "text-purple-600", bg: "bg-purple-50" };
    if (totalScore >= 30)
      return { name: "Опытный", color: "text-blue-600", bg: "bg-blue-50" };
    return { name: "Новичок", color: "text-green-600", bg: "bg-green-50" };
  };

  const partnerLevel = getPartnerLevel(b2cClients[0], b2bClients[0]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Калькулятор дохода
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Рассчитайте свой потенциальный доход от партнерской программы
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Настройки калькулятора */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Settings"
                    size={24}
                    className="mr-2 text-purple-600"
                  />
                  Параметры расчета
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* B2C клиенты */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">
                    Количество B2C клиентов: {b2cClients[0]}
                  </Label>
                  <Slider
                    value={b2cClients}
                    onValueChange={setB2cClients}
                    max={100}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>0</span>
                    <span>100</span>
                  </div>
                </div>

                {/* B2B клиенты */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">
                    Количество B2B клиентов: {b2bClients[0]}
                  </Label>
                  <Slider
                    value={b2bClients}
                    onValueChange={setB2bClients}
                    max={20}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>0</span>
                    <span>20</span>
                  </div>
                </div>

                {/* Информация об условиях */}
                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">
                    Прогрессивная система вознаграждений:
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="font-medium text-purple-800">
                      B2C комиссии:
                    </div>
                    <div className="space-y-1 text-purple-700 ml-2">
                      <div>• 0-19: 8% • 20-49: 10% • 50-79: 12% • 80+: 15%</div>
                    </div>
                    <div className="font-medium text-purple-800 mt-2">
                      B2B комиссии:
                    </div>
                    <div className="space-y-1 text-purple-700 ml-2">
                      <div>• 0-4: 12% • 5-9: 15% • 10-14: 20% • 15+: 25%</div>
                    </div>
                    <div className="text-purple-600 font-medium mt-2">
                      + Бонус B2B: 50% от первого пополнения
                    </div>
                  </div>
                </div>

                {/* Уровень партнера */}
                <div
                  className={`${partnerLevel.bg} rounded-xl p-4 border border-current border-opacity-20`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Ваш уровень</div>
                      <div
                        className={`font-bold text-lg ${partnerLevel.color}`}
                      >
                        {partnerLevel.name}
                      </div>
                    </div>
                    <Icon
                      name="Award"
                      size={32}
                      className={partnerLevel.color}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Результаты расчета */}
            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-900">
                  <Icon name="Calculator" size={24} className="mr-2" />
                  Ваш доход
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Детализация по типам клиентов */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                    <div>
                      <div className="font-semibold text-gray-900">
                        B2C клиенты
                      </div>
                      <div className="text-sm text-gray-600">
                        {b2cClients[0]} × {formatCurrency(b2cAverageCheck)} ×{" "}
                        {(b2cCommissionRate * 100).toFixed(0)}%
                      </div>
                    </div>
                    <div className="text-xl font-bold text-blue-600">
                      {formatCurrency(b2cMonthlyIncome)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                    <div>
                      <div className="font-semibold text-gray-900">
                        B2B клиенты
                      </div>
                      <div className="text-sm text-gray-600">
                        {b2bClients[0]} × {formatCurrency(b2bAverageCheck)} ×{" "}
                        {(b2bCommissionRate * 100).toFixed(0)}%
                      </div>
                    </div>
                    <div className="text-xl font-bold text-purple-600">
                      {formatCurrency(b2bMonthlyIncome)}
                    </div>
                  </div>

                  {b2bClients[0] > 0 && (
                    <div className="flex items-center justify-between p-4 bg-orange-100 rounded-xl border border-orange-200">
                      <div>
                        <div className="font-semibold text-orange-900">
                          Бонус за первое пополнение
                        </div>
                        <div className="text-sm text-orange-700">
                          {b2bClients[0]} × {formatCurrency(b2bAverageCheck)} ×
                          50%
                        </div>
                      </div>
                      <div className="text-xl font-bold text-orange-600">
                        {formatCurrency(b2bFirstTimeBonus)}
                      </div>
                    </div>
                  )}
                </div>

                {/* Итоговые суммы */}
                <div className="border-t border-purple-200 pt-6">
                  <div className="text-center space-y-4">
                    <div>
                      <div className="text-sm text-purple-700 mb-1">
                        Доход в месяц
                      </div>
                      <div className="text-3xl font-bold text-purple-900">
                        {formatCurrency(totalMonthlyIncome)}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-purple-700 mb-1">
                        Доход в год
                      </div>
                      <div className="text-2xl font-bold text-purple-900">
                        {formatCurrency(totalYearlyIncome)}
                      </div>
                    </div>

                    {b2bClients[0] > 0 && (
                      <div className="bg-orange-100 rounded-xl p-4 border border-orange-200">
                        <div className="text-sm text-orange-700 mb-1">
                          + Разовый бонус
                        </div>
                        <div className="text-xl font-bold text-orange-600">
                          {formatCurrency(b2bFirstTimeBonus)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Призыв к действию */}
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Хотите зарабатывать {formatCurrency(totalMonthlyIncome)} в
                    месяц?
                  </p>
                  <button
                    className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                    onClick={() =>
                      document
                        .getElementById("final-cta")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Стать партнером →
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncomeCalculator;
