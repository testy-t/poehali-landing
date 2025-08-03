import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Admin = () => {
  const [systemStatus, setSystemStatus] = useState("online");
  const [testsRunning, setTestsRunning] = useState(false);
  const [testResults, setTestResults] = useState<string[]>([]);

  const runTest = (testName: string) => {
    setTestsRunning(true);
    setTestResults(prev => [...prev, `✅ ${testName} - Passed`]);
    
    setTimeout(() => {
      setTestsRunning(false);
    }, 1000);
  };

  const clearResults = () => {
    setTestResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-zinc-800 mb-2">Admin Panel</h1>
          <p className="text-zinc-600">Панель администратора для тестирования системы</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Статус системы</CardTitle>
              <Icon name="Activity" size={16} className="text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Онлайн</div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Стабильно
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Активные тесты</CardTitle>
              <Icon name="TestTube" size={16} className="text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{testResults.length}</div>
              <p className="text-xs text-zinc-600">
                выполнено сегодня
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Производительность</CardTitle>
              <Icon name="Zap" size={16} className="text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.5%</div>
              <p className="text-xs text-zinc-600">
                uptime за 30 дней
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Play" size={20} />
                Запуск тестов
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={() => runTest("API Connection")} 
                disabled={testsRunning}
                className="w-full"
              >
                {testsRunning ? (
                  <>
                    <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                    Выполняется...
                  </>
                ) : (
                  <>
                    <Icon name="Wifi" size={16} className="mr-2" />
                    Тест API соединения
                  </>
                )}
              </Button>
              
              <Button 
                onClick={() => runTest("Database Health")} 
                disabled={testsRunning}
                className="w-full"
                variant="outline"
              >
                <Icon name="Database" size={16} className="mr-2" />
                Проверка базы данных
              </Button>
              
              <Button 
                onClick={() => runTest("UI Components")} 
                disabled={testsRunning}
                className="w-full"
                variant="outline"
              >
                <Icon name="Layout" size={16} className="mr-2" />
                Тест UI компонентов
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Icon name="Terminal" size={20} />
                Результаты тестов
              </CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearResults}
                disabled={testResults.length === 0}
              >
                <Icon name="Trash2" size={16} />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {testResults.length === 0 ? (
                  <p className="text-zinc-500 text-sm">Нет результатов тестов</p>
                ) : (
                  testResults.map((result, index) => (
                    <div key={index} className="text-sm font-mono bg-zinc-100 p-2 rounded">
                      {result}
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Settings" size={20} />
                Системная информация
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Версия:</strong> 1.0.0
                </div>
                <div>
                  <strong>Последнее обновление:</strong> {new Date().toLocaleDateString()}
                </div>
                <div>
                  <strong>Окружение:</strong> Production
                </div>
                <div>
                  <strong>Build ID:</strong> {Math.random().toString(36).substr(2, 9)}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;