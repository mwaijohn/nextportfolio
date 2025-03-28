import Contact from "./ui/Contact";
import Experience from "./ui/Experience";
import Footer from "./ui/Footer";
import Hero from "./ui/Hero";
import Licenses from "./ui/Licesnses";

export default function Home() {
  return (
    <div className="sm:px-64 px-4">
      <Hero />
      <Experience />
      <Licenses/>
      <Contact />
      <Footer />
    </div>
  );
}
