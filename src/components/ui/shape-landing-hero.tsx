import { motion } from "framer-motion"

interface HeroGeometricProps {
  badge?: string
  title1?: string
  title2?: string
}

export function HeroGeometric({
  badge = "Palantine Travels",
  title1 = "Your Trusted Travel Partner",
  title2 = "Across India",
}: HeroGeometricProps) {
  const points = [
    "Luxury Buses",
    "Tempo Travellers",
    "Cars & SUVs",
    "Corporate Travel",
    "Pan-India Service",
  ]

  return (
    <section
      id="home"
      style={{
        background: "transparent",
        paddingTop: "120px",
        paddingBottom: "160px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          padding: "0 32px",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "32px",
            padding: "8px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(13,35,87,0.15)",
            background: "rgba(13,35,87,0.06)",
            fontSize: "0.875rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: "#0d2357",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0d2357", display: "inline-block" }} />
          {badge}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.28 }}
          style={{
            fontSize: "clamp(2.4rem, 4.5vw, 4.2rem)",
            color: "#0d2357",
            marginBottom: "28px",
            fontWeight: 900,
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          {title1}
          <br />
          <span style={{ color: "#1a3a7c" }}>{title2}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.42 }}
          style={{
            color: "#6b7fa3",
            fontSize: "1.1rem",
            maxWidth: "640px",
            lineHeight: 1.8,
            marginBottom: "36px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          Reliable, safe, and comfortable travel for family trips, corporate
          journeys, group tours, and long-distance rides — anywhere across India.
        </motion.p>

        {/* Pills */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "44px",
          }}
        >
          {points.map((pt) => (
            <span
              key={pt}
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                fontSize: "0.875rem",
                border: "1px solid rgba(13,35,87,0.15)",
                background: "rgba(13,35,87,0.05)",
                color: "#6b7fa3",
              }}
            >
              {pt}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.66 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}
        >
          <a
            href="tel:+918652747851"
            className="btn"
            style={{ background: "#0d2357", color: "#ffffff", fontWeight: 700, padding: "16px 36px" }}
          >
            Book Your Journey
          </a>
          <a
            href="https://www.instagram.com/palantine.in"
            target="_blank"
            rel="noreferrer"
            className="btn"
            style={{
              background: "transparent",
              color: "#0d2357",
              border: "1.5px solid rgba(13,35,87,0.3)",
              padding: "16px 36px",
            }}
          >
            Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroGeometric
