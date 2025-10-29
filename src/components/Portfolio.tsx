import polygonImage from "@/assets/polygon-sculpture.jpg";
import partitionImage from "@/assets/metal-partition.jpg";
import tableImage from "@/assets/metal-table.jpg";

const works = [
  {
    image: polygonImage,
    title: "Полигональная скульптура",
    description: "Современная металлическая скульптура для галереи"
  },
  {
    image: partitionImage,
    title: "Металлическая перегородка",
    description: "Дизайнерская перегородка для ресторана"
  },
  {
    image: tableImage,
    title: "Стол из металла и дерева",
    description: "Индустриальный дизайн для кафе"
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
          НАШИ РАБОТЫ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {works.map((work, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <p className="text-muted-foreground text-sm">{work.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
