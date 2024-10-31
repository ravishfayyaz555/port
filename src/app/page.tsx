import Header from "./components/header";
import HomeSection from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeSection />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
