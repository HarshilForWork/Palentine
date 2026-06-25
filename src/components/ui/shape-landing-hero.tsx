import { motion, useReducedMotion } from "framer-motion"
import { MessageCircle, Phone } from "lucide-react"

interface HeroGeometricProps {
  badge?: string
  title1?: string
  title2?: string
}

export function HeroGeometric({
  title1 = "Your Trusted Travel Partner",
  title2 = "Across India",
}: HeroGeometricProps) {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: shouldReduceMotion
      ? { duration: 0.15, delay: 0 }
      : { duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] },
  })

  return (
    <section
      id="home"
      style={{
        background: "transparent",
        paddingTop: "100px",
        paddingBottom: "150px",
        width: "100%",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Plain text label */}
          <motion.p
            {...fadeUp(0.1)}
            style={{
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--secondary)",
              marginBottom: "20px",
            }}
          >
            Pan-India Transport Service
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.22)}
            style={{
              fontSize: "clamp(2.2rem, 3.6vw, 3.6rem)",
              color: "var(--primary)",
              marginBottom: "22px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            {title1}
            <br />
            <span style={{ color: "var(--secondary)" }}>{title2}.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.36)}
            style={{
              color: "#3d4f6a",
              fontSize: "1.08rem",
              maxWidth: "600px",
              margin: "0 auto 38px",
              lineHeight: 1.75,
            }}
          >
            Reliable, safe, and comfortable travel for family trips, corporate
            journeys, group tours, and long-distance rides — anywhere across India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.48)}
            style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}
          >
            <a
              href="https://wa.me/918652747851"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "16px 32px" }}
            >
              <MessageCircle size={18} />
              WhatsApp Enquiry
            </a>
            <a
              href="tel:+918652747851"
              className="btn btn-dark"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "16px 32px" }}
            >
              <Phone size={18} />
              Call Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroGeometric
