import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background-elevated border-t border-border py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black mb-4 text-gradient">ARTMETALLWORK</h3>
            <p className="text-muted-foreground text-sm">
              Профессиональная аргонная сварка и изготовление металлоконструкций с 2014 года
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Минск, Беларусь</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+375447624444" className="hover:text-primary transition-colors">
                  +375 44 762 4444
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:artmetallwork@ya.ru" className="hover:text-primary transition-colors">
                  artmetallwork@ya.ru
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-accent" />
                <a 
                  href="https://wa.me/375447624444" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Аргонная сварка</li>
              <li>Ремонт металлоконструкций</li>
              <li>Полигональные фигуры</li>
              <li>Изготовление на заказ</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Artmetallwork LLC. Все права защищены.</p>
          <p className="mt-2">Доставка по РФ и Беларуси</p>
        </div>
      </div>
    </footer>
  );
};
