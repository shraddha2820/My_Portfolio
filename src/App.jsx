import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects"
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import CertificateSlider from './components/Certificates/CertificateSlider';
import ContactForm from './components/Contact/ContactForm';

// import Contact from './components/Contact/Contact';

function App() {


  return (
    <div className='bg-[#171d32] h-auto w-full antialiased selection:bg-cyan-500 '>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <CertificateSlider />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
