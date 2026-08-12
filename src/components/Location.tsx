import { MapPin, Navigation, Phone } from 'lucide-react';
import {
  officeAddressLines,
  officeDirectionsUrl,
  officeMapEmbedUrl,
  officePhone,
  officePhoneDisplay,
} from '../data/office';

export default function Location() {
  return (
    <section className="section" id="location">
      <div className="container">
        <h2 className="section-title">Visit Our Office</h2>
        <p className="section-subtitle">
          Our booking office is in Vashi, Navi Mumbai. Call ahead to plan a trip in person,
          or we will arrange pickup from your location.
        </p>

        <div className="office-panel">
          <div className="office-info">
            <h3>Office Address</h3>

            <address className="office-address">
              <MapPin size={20} strokeWidth={1.75} className="office-pin" aria-hidden="true" />
              <span>
                {officeAddressLines.map((line, i) => (
                  <span key={line} className="office-address-line">
                    {line}
                    {i < officeAddressLines.length - 1 ? ',' : ''}
                  </span>
                ))}
              </span>
            </address>

            <p className="office-note">
              Serving Mumbai, Navi Mumbai, and outstation routes across India.
            </p>

            <div className="office-actions">
              <a
                href={officeDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <Navigation size={18} strokeWidth={2} aria-hidden="true" />
                Get Directions
              </a>
              <a href={`tel:${officePhone}`} className="btn btn-dark">
                <Phone size={18} strokeWidth={2} aria-hidden="true" />
                {officePhoneDisplay}
              </a>
            </div>
          </div>

          <div className="office-map">
            <iframe
              src={officeMapEmbedUrl}
              title="Google Map showing the Palantine Travels office at Bhawani Complex, Sector 19A, Vashi, Navi Mumbai"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
