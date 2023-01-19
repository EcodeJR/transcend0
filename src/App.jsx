import React from 'react';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import FAQ from './FAQ';
import TermAndCondition from './TermAndCondition';
import NotFound from './NotFound';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';

function App() {
  
  return (

    <section className="min-h-[100vh] max-w-screen overflow-x-hidden">

    <Nav />
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
      
           
        <Route path="about" element={<About />} />
      
           
        <Route path="contact" element={<Contact />}/>
     

      
        <Route path="services" element={<Services />}/>
      

           
        <Route path="faq"  element={<FAQ />}/>
      

          
        <Route path="term&condition"  element={<TermAndCondition />}/>
      
          
        <Route path="*"  element={<NotFound />}/>
    </Routes>
    </Router>
    </section>
  );
}

export default App;