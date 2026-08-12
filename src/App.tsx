import Header from './components/Header';
import Hero from './components/Hero';
import HorizontalBookingCard from './components/HorizontalBookingCard';
import Services from './components/Services';
import Features from './components/Features';
import Fleet from './components/Fleet';
import About from './components/About';
import Location from './components/Location';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { BackgroundPaths } from './components/ui/background-paths';

function App() {
  return (
    <>
      <BackgroundPaths />
      <Header />
      <Hero />
      <HorizontalBookingCard />
      <Services />
      <Features />
      <Fleet />
      <About />
      <Location />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
