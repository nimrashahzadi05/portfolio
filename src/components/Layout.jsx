// components/Layout.jsx

import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
         {/* <main>{children}</main> */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Hero />
      <Footer />
    </>
  )
}

export default Layout;