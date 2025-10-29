import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Advantages } from "@/components/Advantages";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Consultation } from "@/components/Consultation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Portfolio />
      <Testimonials />
      <Consultation />
      <Footer />
    </div>
  );
};

export default Index;
