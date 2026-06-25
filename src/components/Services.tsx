import { Bus, Truck, Car, Briefcase, Users, Navigation } from "lucide-react"
import { type LucideIcon } from "lucide-react"

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Bus,
    title: "Luxury Buses",
    desc: "Comfortable and spacious luxury buses for tours, events, business trips, and long-distance group travel.",
  },
  {
    icon: Truck,
    title: "Tempo Travellers",
    desc: "Tempo travellers available from 9 to 35 seater options for family trips, pilgrimages, vacations, and team outings.",
  },
  {
    icon: Car,
    title: "Cars, SUVs & Premium Vehicles",
    desc: "Sedans, SUVs, and premium vehicles for local travel, airport transfer, business travel, and outstation journeys.",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    desc: "Professional transport services for company staff movement, executive travel, conferences, and business events.",
  },
  {
    icon: Users,
    title: "Family Trips & Group Tours",
    desc: "Safe and organized travel for weddings, family functions, vacations, school trips, and group bookings.",
  },
  {
    icon: Navigation,
    title: "Outstation & Pan-India Travel",
    desc: "Travel across cities and states with trusted drivers, maintained vehicles, and reliable support throughout.",
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title">Our Travel Services</h2>
        <p className="section-subtitle">
          Dependable transport for personal, family, business, and group travel needs across India.
        </p>
        <div className="services-grid">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div className="service-card" key={s.title}>
                <div className="service-icon-wrap">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
