import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-welding.jpg";

export const Hero = () => {
  const scrollToConsultation = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Phone Number */}
      <div className="absolute top-4 right-4 z-20 md:top-8 md:right-8">
        <a 
          href="tel:+375447624444" 
          className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg md:text-xl flex items-center gap-2"
        >
          <span className="animate-pulse">📞</span>
          +375 44 762 44 44
        </a>
      </div>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Аргонная сварка" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="animate-fade-in-up">
          <p className="text-primary text-sm md:text-base font-semibold mb-4 tracking-wider uppercase animate-pulse-glow">
            АРГОННАЯ СВАРКА И РЕМОНТ — ПРОФЕССИОНАЛЬНО И НАДЕЖНО!
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-gradient">ARTMETALLWORK:</span>
            <br />
            Идеально. Просто. Навсегда.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 font-light">
            Изготавливаем функциональные и декоративные металлоконструкции для бизнеса с 2014 года. 
            Аргоновая сварка, ремонт, изготовление на заказ.
          </p>
          
          <Button 
            variant="neon" 
            size="lg" 
            onClick={scrollToConsultation}
            className="text-lg px-8 py-6 h-auto"
          >
            Записаться на консультацию
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
