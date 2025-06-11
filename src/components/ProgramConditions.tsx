import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProgramConditions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Условия программы
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">B2C клиенты</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>1-й год</span>
                  <span className="font-bold text-purple-600">15%</span>
                </div>
                <div className="flex justify-between">
                  <span>2-й год</span>
                  <span className="font-bold text-purple-600">10%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">B2B клиенты</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>1-й год</span>
                  <span className="font-bold text-purple-600">20%</span>
                </div>
                <div className="flex justify-between">
                  <span>2-й год</span>
                  <span className="font-bold text-purple-600">10%</span>
                </div>
                <div className="text-sm text-gray-600 pt-2 border-t">
                  + Бонус 50% от первого пополнения
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramConditions;
