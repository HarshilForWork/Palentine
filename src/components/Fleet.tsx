const fleet = [
  {
    img: '/4_seater.jpeg',
    alt: '4 Seater Sedan',
    title: '4 Seater Sedan',
    desc: 'Compact and comfortable for city travel, airport drops, and solo or couple trips.',
  },
  {
    img: '/6_seater.jpeg',
    alt: '6 Seater SUV',
    title: '6 Seater SUV',
    desc: 'Spacious ride for small families, executive travel, and outstation comfort.',
  },
  {
    img: '/9_seater.jpeg',
    alt: '9 Seater Traveller',
    title: '9 Seater Traveller',
    desc: 'Ideal for small family trips, airport transfers, and short tours.',
  },
  {
    img: '/12_seater.jpeg',
    alt: '12 Seater Traveller',
    title: '12 Seater Traveller',
    desc: 'Perfect for medium-sized groups, friends, and weekend getaways.',
  },
  {
    img: '/17_seater.jpeg',
    alt: '17 Seater Traveller',
    title: '17 Seater Traveller',
    desc: 'Best for group travel, family tours, and business team movement.',
  },
  {
    img: '/26_seater.jpeg',
    alt: '26 Seater Mini Bus',
    title: '26 Seater Mini Bus',
    desc: 'Spacious and efficient for events, pilgrimages, and large family trips.',
  },
  {
    img: '/35_seater.jpeg',
    alt: '35 Seater Luxury Bus',
    title: '35 Seater Luxury Bus',
    desc: 'Comfortable travel for tours, weddings, and long-distance group journeys.',
  },
];


export default function Fleet() {
  return (
    <section className="section" id="fleet">
      <div className="container">
        <h2 className="section-title">Our Fleet</h2>
        <p className="section-subtitle">
          Choose the right vehicle for your route, passenger count, and travel style.
        </p>
        <div className="fleet-grid">
          {fleet.map((v) => (
            <div className="fleet-card" key={v.title} tabIndex={0}>
              <img src={v.img} alt={v.alt} />
              <div className="fleet-card-content">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
