import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Project } from "@/sections/Project";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
 return (
 <div className="min-h-screen overflow-x-hidden">
  <ScrollToTop />
  <Navbar />
  <main>
    <Hero />
    <About />
    <Experience />
    <Project />
    <Contact />
  </main>
  <Footer />
 </div>
 );
}

export default App