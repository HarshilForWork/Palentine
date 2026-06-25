import { MessageCircle } from "lucide-react"

export default function HorizontalBookingCard() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data        = new FormData(e.currentTarget)
    const name        = data.get("name")?.toString()        ?? ""
    const phone       = data.get("phone")?.toString()       ?? ""
    const vehicle     = data.get("vehicle")?.toString()     ?? ""
    const pickup      = data.get("pickup")?.toString()      ?? ""
    const destination = data.get("destination")?.toString() ?? ""

    const msg = encodeURIComponent(
      `Booking Enquiry\nName: ${name}\nPhone: ${phone}\nVehicle: ${vehicle}\nPickup: ${pickup}\nDestination: ${destination}`
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
              <label className="hbc-field-label">Full Name</label>
              <input name="name" type="text" placeholder="John Doe" className="hbc-input" required />
            </div>
            <div className="hbc-field">
              <label className="hbc-field-label">Mobile Number</label>
              <input name="phone" type="tel" placeholder="+91 98765 43210" className="hbc-input" required />
            </div>
            <div className="hbc-field">
              <label className="hbc-field-label">Vehicle Type</label>
              <select name="vehicle" className="hbc-input">
                <option value="">Select vehicle</option>
                <option>Luxury Bus</option>
                <option>Tempo Traveller</option>
                <option>Car / SUV</option>
                <option>Corporate Travel</option>
                <option>Family / Group Tour</option>
              </select>
            </div>
            <div className="hbc-field">
              <label className="hbc-field-label">Pickup Location</label>
              <input name="pickup" type="text" placeholder="City or Area" className="hbc-input" required />
            </div>
            <div className="hbc-field">
              <label className="hbc-field-label">Destination</label>
              <input name="destination" type="text" placeholder="City or Area" className="hbc-input" required />
            </div>
            <button type="submit" className="hbc-submit">
              <MessageCircle size={16} />
              Enquire
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
