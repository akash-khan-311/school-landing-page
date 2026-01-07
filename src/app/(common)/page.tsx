import Hero from "@/components/Hero/Hero";
import About from "@/modules/About/About";
import AboutWithVideo from "@/modules/About/AboutWithVideo";
import FactsSection from "@/modules/About/FactsSection";
import Admission from "@/modules/Contact/Admission";
import Contact from "@/modules/Contact/Contact";
import Gallery from "@/modules/Gallery/Gallery";
import TeacherSection from "@/modules/teachers/TeacherSection";
import WhyUs from "@/modules/why/WhyUs";

const HomePage = () => {
  return (
    <>
      <section id="home" className="relative h-screen overflow-hidden">
        <Hero />
      </section>
      <section id="about" className="bg-[#F5F5F5]">
        <About />
      </section>
      <section>
        <AboutWithVideo />
      </section>
      <section>
        <FactsSection />
      </section>
      <section id="teachers">
        <TeacherSection />
      </section>
      <section id="why">
        <WhyUs />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section>
        <Admission />
      </section>
      <section className="bg-[#F5F5F5]" id="contact">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
