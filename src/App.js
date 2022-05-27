import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Destinations from './component/Destinations';
import About from './component/About';
import Places from './component/Places';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Destinations/>
     <About/>
     <Places/>

    </div>
  );
}

export default App;
