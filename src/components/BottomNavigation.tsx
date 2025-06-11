import { Home, FileText, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const BottomNavigation = () => {
  const navItems = [
    { name: "Главная", url: "#hero", icon: Home },
    { name: "Условия", url: "#terms", icon: FileText },
    { name: "Контакт", url: "#contact", icon: Mail },
  ];

  return <NavBar items={navItems} />;
};

export default BottomNavigation;
