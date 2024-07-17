import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import Services from "./pages/Services";
import Resume from "./pages/resume";
import Portofolio from "./pages/Portofolio";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Services />
      <Resume />
      <Portofolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
