const features = [
  'Well-Maintained Vehicles',
  'Professional Drivers',
  'Competitive Rates',
  '24x7 Support',
  'Safe & Comfortable Journey',
];

export default function Features() {
  return (
    <section className="section features">
      <div className="container">
        <h2 className="section-title">Why Choose Palantine Travels</h2>
        <p className="section-subtitle">
          We focus on comfort, safety, service quality, and affordability for every trip.
        </p>
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-box" key={f}>
              <div className="icon">✅</div>
              <h4>{f}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
