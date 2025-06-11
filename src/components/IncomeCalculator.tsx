import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const IncomeCalculator = () => {
  const [clients, setClients] = useState([10]);
  const [averageCheck, setAverageCheck] = useState([10000]);

  const monthlyIncome = clients[0] * averageCheck[0] * 0.15;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Калькулятор дохода
          </h2>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Рассчитайте свой доход</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Количество клиентов: {clients[0]}
              </label>
              <Slider
                value={clients}
                onValueChange={setClients}
                max={50}
                step={1}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Средний чек: {formatCurrency(averageCheck[0])}
              </label>
              <Slider
                value={averageCheck}
                onValueChange={setAverageCheck}
                min={1000}
                max={50000}
                step={1000}
              />
            </div>

            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="text-sm text-purple-700 mb-1">
                Доход в месяц (15%)
              </div>
              <div className="text-3xl font-bold text-purple-900">
                {formatCurrency(monthlyIncome)}
              </div>
            </div>

            <Button
              className="w-full bg-purple-600 hover:bg-purple-700"
              onClick={() =>
                window.open("https://t.me/m/hEQRio2kNmFi", "_blank")
              }
            >
              Обсудить условия
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IncomeCalculator;
