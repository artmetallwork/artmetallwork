import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const categories = ["Все", "Сварка", "Ремонт", "Изготовление"];

const services = [
  {
    title: "Аргонная сварка нержавейки",
    description: "Высококачественная сварка нержавеющей стали для любых нужд.",
    price: "20 руб.",
    category: "Сварка",
    image: "welding"
  },
  {
    title: "Аргонная сварка дисков",
    description: "Профессиональный ремонт и восстановление автомобильных дисков.",
    price: "60 руб.",
    category: "Ремонт",
    image: "disks"
  },
  {
    title: "Ремонт домашних радиаторов аргоном",
    description: "Надёжное устранение течей и повреждений радиаторов.",
    price: "20 руб.",
    category: "Ремонт",
    image: "radiator"
  },
  {
    title: "Ремонт кондиционеров",
    description: "Восстановление герметичности трубок и систем кондиционирования.",
    price: "30 руб.",
    category: "Ремонт",
    image: "ac"
  },
  {
    title: "Ремонт велосипедов",
    description: "Сварка и ремонт алюминиевых и стальных велорам.",
    price: "60 руб.",
    category: "Ремонт",
    image: "bike"
  },
  {
    title: "Аргонная сварка металлоконструкций",
    description: "Сборка и сварка сложных и негабаритных металлоконструкций.",
    price: "120 руб.",
    category: "Сварка",
    image: "construction"
  },
  {
    title: "Изготовление полигональных фигур под заказ",
    description: "Создание уникальных 3D-объектов и фигур из металла по вашему заказу.",
    price: "Цена по запросу",
    category: "Изготовление",
    image: "polygon"
  },
];

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredServices = activeCategory === "Все" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const handleCalculate = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
          Наши Услуги
        </h2>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className="transition-all"
            >
              {cat}
            </Button>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredServices.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift bg-card border-border overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-card to-card-hover flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">⚙️</div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-black text-primary">
                  {service.price}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="neonOutline" 
                  className="w-full"
                  onClick={handleCalculate}
                >
                  Рассчитать стоимость
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
