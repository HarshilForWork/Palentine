import { scrollToSection } from '../utils/scrollToSection';

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  scrollToSection(id);
}

export default function Header() {
  return (
    <header>
      <div className="container navbar">
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, 'home')}>
          <img src="/Logo.png" alt="Palantine Travels" />
        </a>
        <nav className="nav-links">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
          <a href="#fleet" onClick={(e) => handleNavClick(e, 'fleet')}>Our Fleet</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#location" onClick={(e) => handleNavClick(e, 'location')}>Our Office</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          <a href="tel:+918652747851" className="btn btn-primary">Call Now</a>
        </nav>
      </div>
    </header>
  );
}
