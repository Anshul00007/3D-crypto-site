import Navbar from './components/Navbar';
import { Home, About, Services, Contact } from './components/Sections';

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <footer className="py-8 text-center text-gray-400 border-t border-yellow-400/20">
        © 2025 Infinity Traders. All rights reserved.
      </footer>
    </div>
  );
}