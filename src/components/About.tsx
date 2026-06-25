import { CheckCircle2, PhoneCall, MessageCircle, Star, CalendarCheck, MapPin } from "lucide-react"

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-wrap">
        <div className="about-box">
          <h3>About Palantine Travels</h3>
          <p>
            Palantine Travels is your reliable travel partner for comfortable and
            secure journeys across India. We serve individuals, families, groups,
            and businesses with flexible vehicle options and dependable service.
          </p>
          <p>
            Whether you need a luxury bus, tempo traveller, premium SUV, or corporate
            transportation, we deliver a smooth and hassle-free experience every time.
          </p>
          <ul className="check-list">
            <li>
              <CheckCircle2 size={18} className="check-icon" />
              Trusted travel services across India
            </li>
            <li>
              <CheckCircle2 size={18} className="check-icon" />
              Clean, comfortable, and well-maintained vehicles
            </li>
            <li>
              <CheckCircle2 size={18} className="check-icon" />
              Flexible options for all group sizes
            </li>
            <li>
              <CheckCircle2 size={18} className="check-icon" />
              Personal, family, and corporate travel covered
            </li>
          </ul>
        </div>

        <div className="about-box">
          <h3>Our Commitment to You</h3>
          <div className="about-commitment">
            <div className="commitment-item">
              <Star size={18} className="commit-icon" />
              <p>Vehicles inspected and cleaned before every trip</p>
            </div>
            <div className="commitment-item">
              <PhoneCall size={18} className="commit-icon" />
              <p>Direct driver and coordinator contact — no middleman</p>
            </div>
            <div className="commitment-item">
              <CalendarCheck size={18} className="commit-icon" />
              <p>Flexible booking — no advance payment required to enquire</p>
            </div>
            <div className="commitment-item">
              <MapPin size={18} className="commit-icon" />
              <p>Serving families, corporates, and pilgrimage groups across India</p>
            </div>
          </div>
          <div className="about-contact-actions">
            <a href="https://wa.me/918652747851" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={16} style={{ display: "inline", marginRight: "6px", verticalAlign: "middle" }} />
              WhatsApp Booking
            </a>
            <a href="tel:+918652747851" className="btn btn-dark">
              <PhoneCall size={16} style={{ display: "inline", marginRight: "6px", verticalAlign: "middle" }} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
