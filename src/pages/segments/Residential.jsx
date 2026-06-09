import { Link } from "react-router-dom";

const BENEFITS = [
  "Campus wide deployment of Wireless Network infrastructure. Exhibiting both indoor & outdoor coverage.",
  "Students can access high speed internet and university intranet applications in hostels, canteens, playgrounds, with a single sign-on.",
  "Strong and proven experience of providing integrated wired and wireless P2P services.",
  "Proven experience of over 7 years in deploying wireless networks across the education sector.",
  "Centralized Customer Relationship Management (CRM) portal to track the incidents.",
  "Toll free number for instant access and resolution of challenges.",
  "Centralized 24 x 7 monitoring & trouble-shooting.",
  "Managed services to run existing WiFi operations.",
];

export default function Residential() {
  return (
    <div>
      {/* ── Banner ── */}
      <section className="al-page-banner">
        <h1>Residential</h1>
        <div className="al-page-banner-crumbs">
          <Link to="/">Home</Link> / <Link to="/segments">Segments</Link> /{" "}
          <span>Residential</span>
        </div>
      </section>

      {/* ── Intro Block ── */}
      <section className="seg-intro-section">
        <div className="seg-intro-inner">
          <div className="seg-intro-text">
            <span className="al-section-tag">
              Technical Support &amp; Standards
            </span>
            <h2 className="seg-sub-heading">
              World-class support for wireless broadband &amp; enterprise
              investments
            </h2>
            <p className="seg-para">
              ActivLine Networks is committed to helping you maximize the return
              on your wireless broadband, mobile WiMAX, enterprise VPN or other
              investments. ActivLine offers technical support services to help
              ensure that your products operate efficiently, remain highly
              available, and benefit from the most up-to-date software releases.
            </p>
            <p className="seg-para">
              When choosing ActivLine, you have not only selected world-class
              products, but have also joined with a powerful technical support
              team. Please send an email to{" "}
              <a href="mailto:info@activline.in" className="seg-link">
                info@activline.in
              </a>{" "}
              or contact us at{" "}
              <a href="tel:18002576488" className="seg-link">
                1800 257 6488
              </a>
              .
            </p>
          </div>
          <div className="seg-intro-img">
            <img
              src=" /public/p2p_2.jpg"
              // https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img13-450-338.jpg"
              alt="Residential Support"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Benefits Block ── */}
      <section className="seg-benefits-section-wrap">
        <div className="seg-benefits-inner">
          <div className="seg-benefits-img">
            <img
              src=" /public/footer2.jpg"
              // https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img39-1250-610.jpg"
              alt="Community network"
              loading="lazy"
            />
          </div>
          <div className="seg-benefits-content">
            <span className="al-section-tag seg-tag-blue">
              Residential Communities
            </span>
            <h2 className="seg-sub-heading">
              Always-on internet LAN for families &amp; student hostels
            </h2>
            <p className="seg-para">
              At Activline, we are delighted to be a part of the 'always on'
              lives of residential communities. Our wireless Internet service
              provides instant plug and play access to residents and their
              families.
            </p>
            <p className="seg-para">
              Via our wireless LAN, we can connect residents in apartments,
              villas and gated communities to high-speed internet, information
              and entertainment services.
            </p>
          </div>
        </div>
      </section>

      {/* ── Benefits Cards Grid ── */}
      <section className="seg-cards-section">
        <div className="seg-cards-inner">
          <span className="al-section-tag seg-center">Our Services</span>
          <h2 className="seg-center-heading">
            Activline wireless LAN features:
          </h2>
          <div className="seg-cards-grid">
            {BENEFITS.map((b, i) => (
              <div key={i} className="seg-benefit-card">
                {b}
              </div>
            ))}
          </div>
          <div className="seg-cta-center">
            <Link to="/contact" className="al-btn">
              Contact Us Now!
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
