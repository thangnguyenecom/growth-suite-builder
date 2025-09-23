import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  price: string;
  adFee: string;
  color: "green" | "blue" | "purple";
  popular?: boolean;
}

const ServiceCard = ({ 
  title, 
  subtitle, 
  description, 
  features, 
  price, 
  adFee, 
  color, 
  popular 
}: ServiceCardProps) => {
  const colorClasses = {
    green: "border-green-500 bg-green-50",
    blue: "border-blue-500 bg-blue-50", 
    purple: "border-purple-500 bg-purple-50"
  };

  const badgeColors = {
    green: "bg-green-100 text-green-800 border-green-200",
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    purple: "bg-purple-100 text-purple-800 border-purple-200"
  };

  return (
    <Card className={`relative ${colorClasses[color]} border-2 shadow-card hover:shadow-golden transition-all duration-300 hover:scale-105`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-golden text-white border-golden">
          Phổ biến nhất
        </Badge>
      )}
      <CardHeader className="text-center">
        <div className={`w-12 h-12 rounded-full ${colorClasses[color]} border-2 ${color === 'green' ? 'border-green-500' : color === 'blue' ? 'border-blue-500' : 'border-purple-500'} mx-auto mb-4 flex items-center justify-center text-2xl font-bold`}>
          {color === 'green' ? '🟢' : color === 'blue' ? '🔵' : '🟣'}
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <Badge variant="secondary" className={badgeColors[color]}>
          {subtitle}
        </Badge>
        <p className="text-muted-foreground mt-2">{description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-golden shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="space-y-2 pt-4 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-golden">{price}</div>
            <p className="text-sm text-muted-foreground">(chưa gồm ngân sách ads)</p>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">{adFee}</div>
          </div>
        </div>

        <Button className="w-full bg-gradient-golden hover:bg-golden-dark text-white font-semibold py-6">
          Tư vấn miễn phí
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;