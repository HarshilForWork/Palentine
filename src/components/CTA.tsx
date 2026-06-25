import { MessageCircle, Phone, ExternalLink, Mail } from "lucide-react"

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta" id="contact">
          <h2>Book Your Journey Today</h2>
          <p>
            Planning a family trip, business ride, outstation tour, or group travel?
            Contact Palantine Travels for reliable vehicles, professional drivers, and smooth service.
          </p>
          <div className="contact-links">
            <a href="https://wa.me/918652747851" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={18} style={{ display: "inline", marginRight: "8px", verticalAlign: "middle" }} />
              WhatsApp Booking
            </a>
            <a href="tel:+918652747851" className="btn btn-cta-secondary">
              <Phone size={18} style={{ display: "inline", marginRight: "8px", verticalAlign: "middle" }} />
              +91 8652747851
            </a>
            <a href="mailto:Palantine.in@gmail.com" className="btn btn-cta-secondary">
              <Mail size={18} style={{ display: "inline", marginRight: "8px", verticalAlign: "middle" }} />
              Email Us
            </a>
            <a href="https://www.instagram.com/palantine.in" target="_blank" rel="noreferrer" className="btn btn-cta-secondary">
              <ExternalLink size={18} style={{ display: "inline", marginRight: "8px", verticalAlign: "middle" }} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
