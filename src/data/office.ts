/**
 * Single source of truth for the office location.
 * Both the Location section and the Footer read from here so they can't drift.
 */

/** Display lines, formatted for reading. */
export const officeAddressLines = [
  '67–68, Bhawani Complex, 68-A',
  'Vashi Road, near APMC Market',
  'Phase 2, Sector 19A, Vashi',
  'Navi Mumbai, Maharashtra 400703',
] as const;

/**
 * Owner-supplied coordinates for the office door.
 *
 * These are used instead of a text address on purpose: Google cannot geocode
 * "Bhawani Complex" and silently falls back to the Vashi locality (or, with the
 * building name included, to a point in Mumbai ~15km away). Pinning explicit
 * coordinates means the map can never re-geocode and drift.
 */
export const officeCoords = { lat: 19.083018, lng: 73.01147 } as const;

/**
 * Google Business Profile CID for PALANTINE TRAVELS. Embedding by CID pins the
 * listing itself, so the marker carries the business name rather than a bare dot.
 */
const officeMapCid = '6765677162108454748';

/** Keyless embed — no Maps API key required. */
export const officeMapEmbedUrl = `https://www.google.com/maps?cid=${officeMapCid}&output=embed`;

/** Turn-by-turn directions to the exact coordinates, from the visitor's location. */
export const officeDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${officeCoords.lat},${officeCoords.lng}`;

/** Opens the full business listing (photos, reviews, hours) in Maps. */
export const officeMapLinkUrl = `https://maps.google.com/?cid=${officeMapCid}`;

export const officePhone = '+918652747851';
export const officePhoneDisplay = '+91 8652747851';
