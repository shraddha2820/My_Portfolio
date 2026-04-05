import './App.css'
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects"
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import CertificateSlider from './components/Certificates/CertificateSlider';
import ContactForm from './components/Contact/ContactForm';

// import Contact from './components/Contact/Contact';

function App() {


  return (
    <div className='bg-primaryBg min-h-screen w-full selection:bg-accent/40 selection:text-textPrimary'>
      <Home />
      <Services />
      <Skills />
      <Projects />
      <CertificateSlider />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
