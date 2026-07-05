import { MessageCircle } from "lucide-react"

export default function HorizontalBookingCard() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data        = new FormData(e.currentTarget)
    const name        = data.get("name")?.toString()        ?? ""
    const phone       = data.get("phone")?.toString()       ?? ""
    const date        = data.get("date")?.toString()        ?? ""
    const vehicle     = data.get("vehicle")?.toString()     ?? ""
    const pickup      = data.get("pickup")?.toString()      ?? ""
    const destination = data.get("destination")?.toString() ?? ""
    const msg = encodeURIComponent(
      `Booking Enquiry\nName: ${name}\nPhone: ${phone}\nTravel Date: ${date}\nVehicle: ${vehicle}\nPickup: ${pickup}\nDestination: ${destination}`
    )
    window.open(`https://wa.me/918652747851?text=${msg}`, "_blank")
  }

  return (
    <section className="booking-card-section">
      <div className="container">
        <div className="horizontal-booking-card">
          <p className="hbc-label">Quick Booking Enquiry</p>
          <form className="hbc-form" onSubmit={onSubmit}>
            <div className="hbc-field">
              <label className="hbc-field-label" htmlFor="hbc-name">Full Name</label>
              <input id="hbc-name" name="name" type="text" placeholder="Your name" className="hbc-input" required />
            </div>
            <div className="hbc-field">
              <label className="hbc-field-label" htmlFor="hbc-phone">Mobile Number</label>
              <input id="hbc-phone" name="phone" type="tel" placeholder="+91 98765 43210" className="hbc-input" required />
            </div>
            <div className="hbc-field">
              <label className="hbc-field-label" htmlFor="hbc-date">Travel Date</label>
              <input id="hbc-date" name="date" type="date" className="hbc-input" required />
            </div>
            <div className="hbc-field">
              <label className="hbc-field-label" htmlFor="hbc-vehicle">Vehicle Type</label>
              <select id="hbc-vehicle" name="vehicle" className="hbc-input" required>
                <option value="">Select vehicle</option>
                <option>6 Seater Car</option>
                <option>9 Seater Traveller</option>
                <option>12 Seater Traveller</option>
                <option>17 Seater Traveller</option>
                <option>26 Seater Mini Bus</option>
                <option>35 Seater Luxury Bus</option>
              </select>
            </div>
            <div className="hbc-field">
              <label className="hbc-field-label" htmlFor="hbc-pickup">Pickup Location</label>
              <input id="hbc-pickup" name="pickup" type="text" placeholder="City or area" className="hbc-input" required />
            </div>
            <div className="hbc-field">
              <label className="hbc-field-label" htmlFor="hbc-dest">Destination</label>
              <input id="hbc-dest" name="destination" type="text" placeholder="City or area" className="hbc-input" required />
            </div>
            <button type="submit" className="hbc-submit">
              <MessageCircle size={16} />
              Get Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
