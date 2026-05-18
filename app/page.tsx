import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedMenu from "@/components/FeaturedMenu";
import OmakaseCourse from "@/components/OmakaseCourse";
import MenuSections from "@/components/MenuSections";
import OdenSection from "@/components/OdenSection";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <FeaturedMenu />
        <OmakaseCourse />
        <MenuSections />
        <OdenSection />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </>
  );
}
