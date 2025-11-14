import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Андрей",
    date: "15.03.2025",
    rating: 5,
    text: "Я готов поставить Владимиру 11 баллов по 10-ти балльной шкале. На все работы, включая сборку и установку, ушло всего 2.5 часа. Человек меня не задерживал... у меня об этом мастере самый положительный отзыв и рекомендации."
  },
  {
    name: "Сергей",
    date: "22.11.2024",
    rating: 5,
    text: "Вся оговоренная работа сделана отлично. И даже тачку мне подварили бонусом. Парни - молодцы!"
  },
  {
    name: "Л",
    date: "08.07.2023",
    rating: 5,
    text: "Очень аккуратная и качественная сварка. Большое спасибо Владимиру за оперативную и профессиональную работу!"
  },
  {
    name: "Дмитрий",
    date: "19.05.2024",
    rating: 5,
    text: "Всё отлично, навес мне сварили как я хотел. Владимир надёжный специалист."
  },
  {
    name: "С",
    date: "12.09.2020",
    rating: 5,
    text: "Я остался доволен, по запросу все выполнено без замечаний. Готов рекомендовать."
  },
  {
    name: "Клиент",
    date: "27.02.2023",
    rating: 5,
    text: "Все выполнено в срок, качественно, претензий к мастеру нет."
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background-elevated">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Что о нас говорят клиенты
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold">5.0</span>
            <span className="text-muted-foreground">/ 5 (6 отзывов)</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover-lift bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
