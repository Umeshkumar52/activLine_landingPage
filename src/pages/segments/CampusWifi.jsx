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

export default function CampusWifi() {
  return (
    <div>
      {/* ── Banner ── */}
      <section className="al-page-banner">
        <h1>Campus Wifi</h1>
        <div className="al-page-banner-crumbs">
          <Link to="/">Home</Link> / <Link to="/segments">Segments</Link> /{" "}
          <span>Campus Wifi</span>
        </div>
      </section>

      {/* ── Intro / Welcome Block ── */}
      <section className="seg-intro-section">
        <div className="seg-intro-inner">
          <div className="seg-intro-text">
            <span className="al-section-tag">Academic Communities</span>
            <h2 className="seg-sub-heading">
              Instant plug and play access to students, faculty and staff
              members
            </h2>
            <p className="seg-para">
              At Activline, we are delighted to be a part of the 'always on'
              lives of academic communities. Our on-campus wireless P2P service
              provides instant plug and play access to students, faculty and
              staff members. Not just that, our campus Wi-Fi subscribers can
              also remotely manage, track and bill their Internet use.
            </p>
            <p className="seg-para">
              Via our wireless LAN, we can connect students in hostel rooms,
              classrooms, libraries and cafeterias to the virtual world of
              information, knowledge and entertainment. This translates into new
              revenue streams and sharp competitive recruiting edge for
              institutions because of a satisfied pool of students on campus.
            </p>
          </div>
          <div style={{ height: "400px" }} className="seg-intro-img">
            <img
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src="/public/dash.png"
              alt="Campus Wifi"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Benefits Block ── */}
      <section className="seg-benefits-section-wrap">
        <div className="seg-benefits-inner">
          <div style={{ height: "400px" }} className="seg-benefits-img">
            <img
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src="/public/service.png"
              alt="Wireless infrastructure deployment"
              loading="lazy"
            />
          </div>
          <div className="seg-benefits-content">
            <span className="al-section-tag seg-tag-blue">Our Benefits</span>
            <h2 className="seg-sub-heading">
              Why ActivLine Campus WiFi works well:
            </h2>
            <ul className="seg-benefit-list">
              {BENEFITS.map((b, i) => (
                <li key={i} className="seg-benefit-item">
                  <span className="seg-check">✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="seg-cta-row">
              <Link to="/contact" className="al-btn">
                Contact Us Now!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
