import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, TrendingUp, Users, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8 text-golden" />,
      title: "Website gọn gàng, dễ dùng",
      description: "Thiết kế tối ưu trải nghiệm người dùng, tăng tỷ lệ chuyển đổi tối đa"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-golden" />,
      title: "Quảng cáo hiệu quả", 
      description: "Tính phí minh bạch theo doanh thu ads, đảm bảo ROI tốt nhất"
    },
    {
      icon: <Users className="w-8 h-8 text-golden" />,
      title: "Đội ngũ chuyên nghiệp",
      description: "Từ kỹ thuật đến marketing, tiết kiệm thời gian & chi phí vận hành"
    },
    {
      icon: <Shield className="w-8 h-8 text-golden" />,
      title: "Cam kết chất lượng",
      description: "Bảo trì miễn phí, hỗ trợ 24/7, đảm bảo website hoạt động ổn định"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-golden-lighter">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            ✨ Lợi ích khi chọn Gosatech
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi không chỉ cung cấp dịch vụ, mà còn đồng hành cùng sự phát triển của doanh nghiệp bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;