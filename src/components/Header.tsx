export default function Header() {
  return (
    <header>
      <div className="container navbar">
        <a href="#home" className="logo">
          <img src="/Logo.png" alt="Palantine Travels" />
        </a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#fleet">Our Fleet</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="tel:+918652747851" className="btn btn-primary">Call Now</a>
        </nav>
      </div>
    </header>
  );
}
