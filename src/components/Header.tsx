import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-golden rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Gosatech</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-golden transition-colors">
              Dịch vụ
            </a>
            <a href="#benefits" className="text-foreground hover:text-golden transition-colors">
              Lợi ích
            </a>
            <a href="#contact" className="text-foreground hover:text-golden transition-colors">
              Liên hệ
            </a>
          </nav>

          <Button className="bg-gradient-golden hover:bg-golden-dark text-white">
            <Phone className="w-4 h-4 mr-2" />
            0938.930.866
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;