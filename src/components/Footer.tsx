import { scrollToSection } from '../utils/scrollToSection';

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  scrollToSection(id);
}

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Palantine Travels</h3>
            <p>Your Real Travel Pal.</p>
            <p>
              We provide trusted and comfortable travel services across India for
              family trips, group tours, corporate bookings, outstation journeys, and more.
            </p>
            <p>Serving Pan India</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
            <a href="#fleet" onClick={(e) => handleNavClick(e, 'fleet')}>Our Fleet</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <a href="tel:+918652747851">+91 8652747851</a>
            <a href="mailto:Palantine.in@gmail.com">Palantine.in@gmail.com</a>
            <a href="https://www.instagram.com/palantine.in" target="_blank" rel="noreferrer">Instagram: @palantine.in</a>
          </div>
        </div>
        <div className="copyright">
          © 2026 Palantine Travels. All rights reserved. | Your Real Travel Pal
        </div>
      </div>
    </footer>
  );
}
