import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import weldingSteelImg from "@/assets/service-welding-steel.jpg";
import wheelRepairImg from "@/assets/service-wheel-repair.jpg";
import radiatorRepairImg from "@/assets/service-radiator-repair.jpg";
import acRepairImg from "@/assets/service-ac-repair.jpg";
import bikeRepairImg from "@/assets/service-bike-repair.jpg";
import constructionImg from "@/assets/service-construction.jpg";
import polygonImg from "@/assets/service-polygon.jpg";
import metalFurnitureImg from "@/assets/metal-furniture.jpg";

const categories = ["Все", "Сварка", "Ремонт", "Изготовление"];

const services = [
  {
    title: "Аргонная сварка нержавейки",
    description: "Высококачественная сварка нержавеющей стали для любых нужд.",
    price: "20 руб.",
    category: "Сварка",
    image: weldingSteelImg
  },
  {
    title: "Аргонная сварка дисков",
    description: "Профессиональный ремонт и восстановление автомобильных дисков.",
    price: "60 руб.",
    category: "Ремонт",
    image: wheelRepairImg
  },
  {
    title: "Аргонная сварка для авто",
    description: "Сварка поддонов, глушителей, радиаторов, кронштейнов и других элементов автомобиля.",
    price: "20 руб.",
    category: "Сварка",
    image: radiatorRepairImg
  },
  {
    title: "Ремонт кондиционеров",
    description: "Восстановление герметичности трубок и систем кондиционирования.",
    price: "30 руб.",
    category: "Ремонт",
    image: acRepairImg
  },
  {
    title: "Ремонт велосипедов",
    description: "Сварка и ремонт алюминиевых и стальных велорам.",
    price: "60 руб.",
    category: "Ремонт",
    image: bikeRepairImg
  },
  {
    title: "Аргонная сварка металлоконструкций",
    description: "Сборка и сварка сложных и негабаритных металлоконструкций.",
    price: "120 руб.",
    category: "Сварка",
    image: constructionImg
  },
  {
    title: "Изготовление полигональных фигур под заказ",
    description: "Создание уникальных 3D-объектов и фигур из металла по вашему заказу.",
    price: "Цена по запросу",
    category: "Изготовление",
    image: polygonImg
  },
  {
    title: "Изготовление металлической мебели",
    description: "Производство качественной металлической мебели по индивидуальным размерам.",
    price: "Цена по запросу",
    category: "Изготовление",
    image: metalFurnitureImg
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
              className="hover-lift bg-card border-border overflow-hidden group flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader className="flex-grow-0">
                <CardTitle className="text-xl min-h-[3.5rem] flex items-start">{service.title}</CardTitle>
                <CardDescription className="text-gradient font-medium min-h-[4rem]">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow-0">
                <div className="text-2xl font-black text-primary min-h-[2rem]">
                  {service.price}
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
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
