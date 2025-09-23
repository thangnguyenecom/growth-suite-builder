import { ArrowRight, Globe, Target, TrendingUp, Zap } from "lucide-react";

const MarketingAutomation = () => {
  const platforms = [
    {
      name: "Facebook",
      icon: "📘",
      description: "Pixel tracking & remarketing",
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "Google Ads",
      icon: "🎯",
      description: "Conversion tracking & optimization",
      color: "bg-green-50 border-green-200"
    },
    {
      name: "TikTok",
      icon: "🎵",
      description: "Audience syncing & campaigns",
      color: "bg-pink-50 border-pink-200"
    }
  ];

  const automationSteps = [
    {
      title: "Thu thập dữ liệu",
      description: "Website tự động ghi nhận hành vi khách hàng",
      icon: <Globe className="w-6 h-6 text-golden" />
    },
    {
      title: "Phân tích & phân loại",
      description: "AI xử lý dữ liệu và tạo audience segments",
      icon: <Target className="w-6 h-6 text-golden" />
    },
    {
      title: "Tự động remarketing",
      description: "Đẩy quảng cáo đúng người, đúng thời điểm",
      icon: <Zap className="w-6 h-6 text-golden" />
    },
    {
      title: "Tối ưu liên tục",
      description: "Học máy cải thiện hiệu quả theo thời gian",
      icon: <TrendingUp className="w-6 h-6 text-golden" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            🤖 Tự Động Hóa Marketing Đa Kênh
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hệ thống MarTech thông minh kết nối website với các nền tảng quảng cáo, 
            tự động tối ưu chuyển đổi 24/7
          </p>
        </div>

        {/* Automation Flow Diagram */}
        <div className="relative mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Website Center Hub */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-golden rounded-full flex items-center justify-center shadow-golden animate-pulse">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-card">
                  Website Hub
                </span>
              </div>
            </div>

            {/* Connection Lines and Platforms */}
            <div className="hidden lg:block">
              <ArrowRight className="w-8 h-8 text-golden animate-pulse" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className={`p-6 rounded-xl border-2 ${platform.color} hover:scale-105 transition-transform duration-300`}>
                  <div className="text-center">
                    <div className="text-4xl mb-3">{platform.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground">{platform.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automation Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {automationSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-golden transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-golden-lighter rounded-lg mb-4">
                  {step.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
              {index < automationSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-golden" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="bg-white rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center mb-8">Lợi Ích Tự Động Hóa</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h4 className="font-bold mb-2">Tăng ROI 200-300%</h4>
              <p className="text-muted-foreground text-sm">Tối ưu chi phí quảng cáo tự động</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h4 className="font-bold mb-2">Targeting Chính Xác</h4>
              <p className="text-muted-foreground text-sm">AI phân tích hành vi khách hàng</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⏰</span>
              </div>
              <h4 className="font-bold mb-2">Hoạt Động 24/7</h4>
              <p className="text-muted-foreground text-sm">Không ngừng tối ưu và remarketing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingAutomation;