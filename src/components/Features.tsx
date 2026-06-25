import { Shield, UserCheck, Clock, Wallet, Globe } from "lucide-react"

const stats = [
  { num: "6+", label: "Vehicle Types Available" },
  { num: "24×7", label: "WhatsApp & Call Support" },
  { num: "Pan-India", label: "Route Coverage" },
]

const features = [
  { icon: Shield, label: "Well-Maintained Vehicles" },
  { icon: UserCheck, label: "Professional, Verified Drivers" },
  { icon: Clock, label: "24×7 Customer Support" },
  { icon: Wallet, label: "Competitive, Transparent Rates" },
  { icon: Globe, label: "Pan-India Coverage" },
]

export default function Features() {
  return (
    <section className="section navy-section">
      <div className="container">
        <h2 className="section-title">Why Choose Palantine Travels</h2>
        <p className="section-subtitle">
          Comfort, safety, and reliable service — every trip, every group, every route.
        </p>

        <div className="features-stats">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="feature-stat-num">{s.num}</div>
              <div className="feature-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="features-grid">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div className="feature-box" key={f.label}>
                <div className="feat-icon">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h4>{f.label}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
