import { ScrollVelocity } from '@/components/ui/scroll-velocity';

const fleet = [
  {
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    alt: '9 Seater Traveller',
    title: '9 Seater Traveller',
    desc: 'Ideal for small family trips, airport transfers, and short tours.',
  },
  {
    img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
    alt: '12 Seater Traveller',
    title: '12 Seater Traveller',
    desc: 'Perfect for medium-sized groups, friends, and weekend getaways.',
  },
  {
    img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80',
    alt: '17 Seater Traveller',
    title: '17 Seater Traveller',
    desc: 'Best for group travel, family tours, and business team movement.',
  },
  {
    img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    alt: '26 Seater Mini Bus',
    title: '26 Seater Mini Bus',
    desc: 'Spacious and efficient for events, pilgrimages, and large family trips.',
  },
  {
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    alt: '35 Seater Luxury Bus',
    title: '35 Seater Luxury Bus',
    desc: 'Comfortable travel for tours, weddings, and long-distance group journeys.',
  },
  {
    img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80',
    alt: 'Sedans SUVs and Premium Cars',
    title: 'Sedans, SUVs & Premium Cars',
    desc: 'Premium ride options for city travel, executive needs, and outstation comfort.',
  },
];


function FleetCard({ img, alt, title, desc }: typeof fleet[0]) {
  return (
    <div className="relative mx-5 h-52 w-72 shrink-0 overflow-hidden rounded-2xl shadow-lg md:h-64 md:w-88">
      <img
        src={img}
        alt={alt}
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-base font-semibold leading-tight">{title}</h3>
        <p className="mt-0.5 text-xs text-white/80">{desc}</p>
      </div>
    </div>
  );
}

export default function Fleet() {
  return (
    <section className="section" id="fleet">
      <div className="container">
        <h2 className="section-title">Our Fleet</h2>
        <p className="section-subtitle">
          Choose the right vehicle for your route, passenger count, and travel style.
        </p>
      </div>
      <div
        style={{
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(13,35,87,0.08)',
          borderBottom: '1px solid rgba(13,35,87,0.08)',
          boxShadow: '0 4px 32px rgba(13,35,87,0.06)',
          padding: '28px 0',
        }}
      >
        <ScrollVelocity velocity={3}>
          {fleet.map((v) => (
            <FleetCard key={v.title} {...v} />
          ))}
        </ScrollVelocity>
      </div>
    </section>
  );
}
