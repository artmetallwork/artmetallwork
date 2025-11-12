import { Shield, Users, Wrench, Factory, Truck, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const advantages = [
  {
    icon: Shield,
    title: "Высокое качество материалов",
    description: "Только проверенные поставщики"
  },
  {
    icon: Users,
    title: "Индивидуальный подход",
    description: "Проект под Вас"
  },
  {
    icon: Wrench,
    title: "Профессиональная сварка",
    description: "Алюминий, нержавейка, цветмет"
  },
  {
    icon: Factory,
    title: "Собственное производство",
    description: "С 2014 года"
  },
  {
    icon: Truck,
    title: "Доставка по РФ и РБ",
    description: "От 1 дня"
  },
  {
    icon: Award,
    title: "Гарантия качества",
    description: "Без посредников"
  },
];

export const Advantages = () => {
  return (
    <section className="py-20 bg-background-elevated">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
          Почему выбирают <span className="text-gradient">ARTMETALLWORK</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <Card 
                key={index} 
                className="hover-lift bg-card border-border group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:glow-blue transition-all">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{adv.title}</h3>
                  <p className="text-muted-foreground mt-auto">{adv.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
