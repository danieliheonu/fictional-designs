import React from 'react'
import Features from './components/Features';
import Feedback from './components/Feedback';
import HeroComponent from './components/HeroComponent';
import Navbar from './components/Navbar'
import PartnershipComponent from './components/PartnershipComponent';
import SnapdocsImageComponent from './components/SnapdocsImageComponent';
import WhoWeAreComponent from './components/WhoWeAreComponent';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <HeroComponent />
      <WhoWeAreComponent />
      <Features />
      <Feedback />
      <PartnershipComponent />
      <SnapdocsImageComponent />
    </div>
  );
}

export default App;
