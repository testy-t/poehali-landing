import { Home, FileText, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const BottomNavigation = () => {
  const handleNavClick = (url: string) => {
    const element = document.querySelector(url);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = [
    {
      name: "Главная",
      url: "#hero",
      icon: Home,
      onClick: () => handleNavClick("#hero"),
    },
    {
      name: "Условия",
      url: "#terms",
      icon: FileText,
      onClick: () => handleNavClick("#terms"),
    },
    {
      name: "Контакт",
      url: "https://t.me/m/hEQRio2kNmFi",
      icon: Mail,
      onClick: () => window.open("https://t.me/m/hEQRio2kNmFi", "_blank"),
    },
  ];

  return <NavBar items={navItems} />;
};

export default BottomNavigation;
