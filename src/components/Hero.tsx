import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
const Hero = () => {
  return <section className="min-h-screen bg-gradient-subtle flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Tối Ưu Website 
                <span className="text-golden"> + Marketing</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Giúp doanh nghiệp tăng doanh số bán hàng online với website tối ưu chuyển đổi 
                và chiến lược marketing hiệu quả.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-golden rounded-full"></div>
                <span className="text-lg">Tăng tỷ lệ chuyển đổi website lên 200-300%</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-golden rounded-full"></div>
                <span className="text-lg">Chi phí quảng cáo minh bạch</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-golden rounded-full"></div>
                <span className="text-lg">Đội ngũ chuyên nghiệp đồng hành 24/7</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-golden hover:bg-golden-dark text-white font-semibold px-8 py-6 text-lg shadow-golden">
                <Phone className="w-5 h-5 mr-2" />
                Gọi ngay: 0938.930.866
              </Button>
              <Button variant="outline" size="lg" className="border-golden text-golden hover:bg-golden-lighter px-8 py-6 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Tư vấn miễn phí
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-golden opacity-10 rounded-3xl"></div>
            <img src={heroImage} alt="Website optimization and marketing services" className="w-full h-auto rounded-3xl shadow-golden" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;