import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './index.css';
import './App.css';
import Home from './contents/home';
import ServicesSection from './contents/ourService';
import ProcessSection from './contents/prosses';
import AbouUs from './contents/aboutUs';
import Team from './contents/team';
import Portofolio from './contents/portofolio';
import Contact from './contents/contact';
import { Routes, Route } from 'react-router-dom';
import Maintenance from './services/maintenance';
import Ai from './services/ai';
import Website from './services/website';
import It from './services/it';
import ScrollToTop from './lib/scrollTop';

export default function App() {
    return (
        <>
          <ScrollToTop />
            <Header />
              <main>
                 <Routes>
                    <Route path='/' element={
                        <>
                            <Home/>
                            <ServicesSection/>
                            <ProcessSection/>
                            <AbouUs/>
                            <Team/>
                            <Portofolio/>
                            <Contact/>
                            </>
                        }/>
                    <Route path="/maintenance" element={<Maintenance />} />
                    <Route path="/it" element={<It />} />
                    <Route path="/website" element={<Website />} />
                    <Route path="/ai" element={<Ai />} />
                
                    </Routes>
                 </main>
            <Footer />
        </>
    );
}
