import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ROICalculator from "@/components/ROICalculator";
import About from "@/components/About";
import GlobalReach from "@/components/GlobalReach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <ROICalculator />
        <About />
        <GlobalReach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
