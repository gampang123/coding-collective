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

export default function App() {
    return (
        <>
            <Header />
              <main>
                  <Home/>
                  <ServicesSection/>
                  <ProcessSection/>
                  <AbouUs/>
                  <Team/>
                  <Portofolio/>
                  <Contact/>
              </main>
            <Footer />
        </>
    );
}
