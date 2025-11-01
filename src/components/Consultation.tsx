import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";

export const Consultation = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Здравствуйте! Меня зовут ${name}. ${message}. Контакт: ${contact}`;
    const whatsappUrl = `https://wa.me/375447624444?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Перенаправление в WhatsApp",
      description: "Сейчас откроется WhatsApp для отправки сообщения",
    });
  };

  return (
    <section id="consultation" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              БЕСПЛАТНАЯ <span className="text-gradient">КОНСУЛЬТАЦИЯ</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Бесплатная консультация: услуги, стоимость, сроки, гарантии
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="contact">Телефон / Email</Label>
                  <Input 
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="+375 XX XXX XX XX"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Опишите ваш запрос..."
                    rows={5}
                    required
                    className="mt-2"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="neon" 
                  size="lg" 
                  className="w-full"
                >
                  <MessageCircle className="mr-2" />
                  Отправить в WhatsApp
                </Button>
              </form>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Как мы работаем:</h3>
                <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                  <li>Вы оставляете заявку</li>
                  <li>Мы отвечаем в течение 1 часа</li>
                  <li>Утверждаем детали проекта</li>
                  <li>Доставляем готовую работу</li>
                  <li>Вы принимаете и оплачиваете</li>
                </ol>
              </div>
              
              <div className="border-t border-border pt-6">
                <h4 className="font-bold mb-3">Работаем:</h4>
                <p className="text-muted-foreground">с физ. и юр.лицами, выезд к клиенту</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
