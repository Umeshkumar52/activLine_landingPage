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

export default function Corporate() {
  return (
    <div>
      {/* ── Banner ── */}
      <section className="al-page-banner">
        <h1>Corporate</h1>
        <div className="al-page-banner-crumbs">
          <Link to="/">Home</Link> / <Link to="/segments">Segments</Link> /{" "}
          <span>Corporate</span>
        </div>
      </section>

      {/* ── Intro Block ── */}
      <section className="seg-intro-section">
        <div className="seg-intro-inner">
          <div className="seg-intro-text">
            <span className="al-section-tag">Enterprise SLA &amp; Systems</span>
            <h2 className="seg-sub-heading">
              Technical support and integration for corporate networks and VPNs
            </h2>
            <p className="seg-para">
              ActivLine Networks is committed to helping you maximize the return
              on your wireless broadband, mobile WiMAX, enterprise VPN or other
              investments benefiting from the IEEE 802.16d and 802.16e
              standards. ActivLine offers technical support services to help
              ensure that your ActivLine products operate efficiently, remain
              highly available, and benefit from the most up-to-date software
              releases.
            </p>
            <p className="seg-para">
              When choosing ActivLine, you have not only selected world-class
              products, but have also joined with a powerful technical support
              team. Should you experience any ActivLine product problems please
              send an email to{" "}
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
              src="/public/p2p_3.jpg"
              // "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img5-450-338.jpg"
              alt="Corporate Support"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Infra / Details Block ── */}
      <section className="seg-benefits-section-wrap">
        <div className="seg-benefits-inner">
          <div className="seg-benefits-img">
            <img
              src="/public/footer2.jpg"
              // "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img39-1250-610.jpg"
              alt="Corporate network"
              loading="lazy"
            />
          </div>
          <div className="seg-benefits-content">
            <span className="al-section-tag seg-tag-blue">
              Corporate Offices
            </span>
            <h2 className="seg-sub-heading">
              Dedicated plug &amp; play access points for offices and workrooms
            </h2>
            <p className="seg-para">
              At Activline, we are delighted to be a part of the 'always on'
              lives of corporate communities. Our wireless Internet service
              provides instant plug and play access to employees and staff
              members.
            </p>
            <p className="seg-para">
              Via our wireless LAN, we can connect employees in meeting rooms,
              offices and cafeterias to the virtual world of information,
              knowledge and entertainment.
            </p>
            <div className="seg-cta-row">
              <Link to="/contact" className="al-btn">
                Contact Us Now!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits Cards Grid ── */}
      <section className="seg-cards-section">
        <div className="seg-cards-inner">
          <span className="al-section-tag seg-center">Support Structure</span>
          <h2 className="seg-center-heading">Corporate WAN benefits:</h2>
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
