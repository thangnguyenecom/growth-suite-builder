import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Sẵn sàng tăng doanh số bán hàng?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết cho doanh nghiệp của bạn
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background shadow-golden border-golden-light">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground">
                Thông tin liên hệ
              </CardTitle>
              <p className="text-muted-foreground">
                Chi phí chỉ là tham khảo. Sau khi nhận yêu cầu, Gosatech sẽ khảo sát chi tiết và gửi báo giá cuối cùng.
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-golden rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Hotline</p>
                      <p className="text-xl font-bold text-golden">Mr Thắng: 0938.930.866</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-golden rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-lg text-golden">thangnguyen.bizon@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-golden rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Tư vấn</p>
                      <p className="text-muted-foreground">Miễn phí 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-golden hover:bg-golden-dark text-white font-semibold py-6 text-lg shadow-golden"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Gọi ngay để tư vấn
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-golden text-golden hover:bg-golden-lighter py-6 text-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Gửi email tư vấn
                  </Button>

                  <div className="bg-golden-lighter p-4 rounded-lg">
                    <p className="text-sm text-center text-muted-foreground">
                      🎯 <strong>Cam kết:</strong> Phản hồi trong vòng 2 giờ làm việc
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;