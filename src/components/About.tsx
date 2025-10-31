import { Shield, TrendingUp, Wrench } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";
import weldingSparksImage from "@/assets/welding-sparks.jpg";
import craftsmanImage from "@/assets/craftsman.jpg";

const timeline = [
  { year: "2014", label: "Старт", icon: Wrench },
  { year: "2020", label: "1000+ заказов", icon: TrendingUp },
  { year: "2025", label: "Полигональные инновации", icon: Shield },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background-elevated">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
          О НАС
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Создаём функциональные и декоративные металлоконструкции широкого назначения. 
            Применяем аргоновую сварку и современные технологии для долговечных решений. Работаем с заказчиками 
            и дизайнерами на всех этапах. Более 1400 заказов с 2014 года. Доставка по РФ и Беларуси.
          </p>
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 max-w-5xl mx-auto">
          <div className="h-64 rounded-lg overflow-hidden hover-lift">
            <img src={workshopImage} alt="Мастерская" className="w-full h-full object-cover" />
          </div>
          <div className="h-64 rounded-lg overflow-hidden hover-lift">
            <img src={weldingSparksImage} alt="Сварка" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-2 h-64 rounded-lg overflow-hidden hover-lift">
            <img src={craftsmanImage} alt="Мастер за работой" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />
            
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.year} 
                  className="relative flex items-center mb-12 last:mb-0"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Icon */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-card border-2 border-primary rounded-full flex items-center justify-center glow-blue z-10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pr-16 md:text-right md:odd:pl-16 md:odd:pr-0 md:odd:text-left md:odd:ml-auto">
                    <div className="text-3xl font-black text-primary mb-1">{item.year}</div>
                    <div className="text-xl text-foreground">{item.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
