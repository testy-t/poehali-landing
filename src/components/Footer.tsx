const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">П</span>
            </div>
            <span className="text-xl font-bold">Poehali.dev</span>
          </div>

          <div className="text-gray-400 text-sm">
            © 2024 Poehali.dev. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
