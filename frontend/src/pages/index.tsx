import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const HomePage = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const howitworksRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    howitworksRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar
        onFeaturesClick={scrollToFeatures}
        onHowItWorksClick={scrollToHowItWorks}
        onFAQClick={scrollToFAQ}
      />
      <section>
        <HeroSection />
      </section>
      <section ref={featuresRef}>
        <FeaturesSection />
      </section>
      <section ref={howitworksRef}>
        <HowItWorksSection />
      </section>
      <section ref={faqRef}>
        <FAQSection />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
