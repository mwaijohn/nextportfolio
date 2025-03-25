import Contact from "./ui/Contact";
import Experience from "./ui/Experience";
import Footer from "./ui/Footer";
import Hero from "./ui/Hero";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
