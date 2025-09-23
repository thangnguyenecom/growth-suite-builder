import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";

const Index = () => {
  const services = [
    {
      title: "GÓI 1 – Khởi Đầu Hiệu Quả",
      subtitle: "Starter Package",
      description: "Phù hợp cho doanh nghiệp mới bán online hoặc muốn tối ưu cơ bản website.",
      features: [
        "Phân tích website & hành vi khách hàng",
        "Thêm nút kêu gọi hành động (CTA), form đăng ký, pop-up khuyến mãi",
        "Cải thiện tốc độ tải trang, tối ưu trên di động",
        "Hỗ trợ upload sản phẩm, cập nhật dữ liệu",
        "Cài đặt & bảo trì website miễn phí",
        "Chạy quảng cáo đa kênh (Facebook + Google + TikTok)"
      ],
      price: "3 triệu/tháng",
      adFee: "📊 Phí quảng cáo: 5% doanh thu từ ads",
      color: "green" as const
    },
    {
      title: "GÓI 2 – Tăng Trưởng Doanh Số",
      subtitle: "Growth Package",
      description: "Phù hợp cho doanh nghiệp muốn tăng tỷ lệ mua hàng & tối ưu trải nghiệm người dùng.",
      features: [
        "Bao gồm toàn bộ Gói 1",
        "Thiết kế lại landing page & trang sản phẩm để tối đa chuyển đổi",
        "Thêm tính năng upsell, cross-sell, gợi ý sản phẩm",
        "Thiết lập hệ thống đo lường chuẩn (GA4, Meta Pixel, Google Ads Conversion)",
        "Chạy quảng cáo đa kênh (Facebook + Google + TikTok)"
      ],
      price: "5 triệu/tháng",
      adFee: "📊 Phí quảng cáo: 5% doanh thu từ ads",
      color: "blue" as const,
      popular: true
    },
    {
      title: "GÓI 3 – Bứt Phá Toàn Diện",
      subtitle: "Premium Package",
      description: "Dành cho doanh nghiệp muốn tăng trưởng mạnh mẽ và chăm sóc khách hàng lâu dài.",
      features: [
        "Bao gồm toàn bộ Gói 2",
        "Tối ưu toàn bộ hành trình khách hàng: từ click → mua hàng → chăm sóc sau mua",
        "Triển khai automation marketing: email remarketing, SMS/ZNS nhắc nhở, giỏ hàng bỏ quên, pop-up ưu đãi",
        "Báo cáo chuyên sâu: ROI, CAC, CLV để kiểm soát chi phí & lợi nhuận",
        "Cài đặt, bảo trì web miễn phí, tư vấn nâng cấp & tích hợp hệ thống",
        "Chạy quảng cáo đa kênh (Facebook + Google + TikTok)"
      ],
      price: "10 triệu/tháng",
      adFee: "📊 Phí quảng cáo: 5% doanh thu từ ads",
      color: "purple" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              🌐 Gói Dịch Vụ Tối Ưu Website + Marketing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chi phí dưới đây chỉ là <strong>tham khảo</strong>. Sau khi nhận yêu cầu, 
              Gosatech sẽ khảo sát chi tiết và gửi báo giá cuối cùng.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <Benefits />
      <Contact />
      
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-golden rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">G</span>
            </div>
            <span className="text-xl font-bold">Gosatech</span>
          </div>
          <p className="text-muted">© 2024 Gosatech. Đồng hành cùng sự phát triển doanh nghiệp Việt.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
