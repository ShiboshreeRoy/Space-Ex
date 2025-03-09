import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tutorials from './components/Tutorials';
import Compiler from './components/Compiler';
import Examples from './components/Examples';
import Features from './components/Features';
import RealWorldProjects from './components/RealWorldProjects';
import LiveSupport from './components/LiveSupport';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Tutorials />
        <Compiler />
        <Examples />
        <RealWorldProjects />
        <Features />
      </main>
      
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 Space-Ex. All rights reserved.</p>
        </div>
      </footer>
      
      <LiveSupport />
    </div>
  );
}

export default App;