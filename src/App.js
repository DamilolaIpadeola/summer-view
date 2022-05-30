import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Destinations from './component/Destinations';
import About from './component/About';
// import Places from './component/Places';
import Footer from './component/Footer';
import Selects from './component/Selects';
import Carousels from './component/Carousels';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Destinations/>
     <About/>
     <Selects/>
     <Carousels/>
    
     {/* <Places/> */}
     <Footer/> 

    </div>
  );
}

export default App;
