import { Home, Settings, Calculator, HelpCircle, Users } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const BottomNavigation = () => {
  const navItems = [
    { name: "Главная", url: "#hero", icon: Home },
    { name: "Как работает", url: "#how-it-works", icon: Settings },
    { name: "Калькулятор", url: "#calculator", icon: Calculator },
    { name: "FAQ", url: "#faq", icon: HelpCircle },
    { name: "Партнерам", url: "#final-cta", icon: Users },
  ];

  return <NavBar items={navItems} />;
};

export default BottomNavigation;
