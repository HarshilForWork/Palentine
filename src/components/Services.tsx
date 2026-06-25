const services = [
  { icon: '🚌', title: 'Luxury Buses', desc: 'Comfortable and spacious luxury buses for tours, events, business trips, and long-distance group travel.' },
  { icon: '🚐', title: 'Tempo Travellers', desc: 'Tempo travellers available from 9 to 35 seater options for family trips, pilgrimages, vacations, and team outings.' },
  { icon: '🚗', title: 'Cars, SUVs & Premium Vehicles', desc: 'Sedans, SUVs, and premium vehicles for local travel, airport transfer, business travel, and outstation journeys.' },
  { icon: '🏢', title: 'Corporate Travel', desc: 'Professional transport services for company staff movement, executive travel, conferences, and business events.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Family Trips & Group Tours', desc: 'Safe and organized travel arrangements for weddings, family functions, vacations, school trips, and group bookings.' },
  { icon: '🛣️', title: 'Outstation & Pan-India Travel', desc: 'Travel across cities and states with trusted drivers, maintained vehicles, and reliable support throughout your journey.' },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title">Our Travel Services</h2>
        <p className="section-subtitle">
          We offer dependable transport solutions for personal, family, business,
          and group travel needs across India.
        </p>
        <div className="grid-3">
          {services.map((s) => (
            <div className="card" key={s.title}>
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
