import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">П</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Poehali.dev</span>
          </div>

          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => window.open("https://t.me/m/hEQRio2kNmFi", "_blank")}
          >
            Стать партнером
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
