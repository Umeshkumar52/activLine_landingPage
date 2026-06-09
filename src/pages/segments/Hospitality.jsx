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

export default function Hospitality() {
  return (
    <div>
      {/* ── Banner ── */}
      <section className="al-page-banner">
        <h1>Hospitality</h1>
        <div className="al-page-banner-crumbs">
          <Link to="/">Home</Link> / <Link to="/segments">Segments</Link> /{" "}
          <span>Hospitality</span>
        </div>
      </section>

      {/* ── Intro Block ── */}
      <section className="seg-intro-section">
        <div className="seg-intro-inner">
          <div className="seg-intro-text">
            <span className="al-section-tag">Hospitality WiFi Solutions</span>
            <h2 className="seg-sub-heading">
              High-capacity wireless networks for campuses, retreats and resorts
            </h2>
            <p className="seg-para">
              At Activline, we are delighted to be a part of the 'always on'
              lives of hospitality communities. Our wireless Internet service
              provides instant plug and play access to guests and staff members.
              Not just that, our Wi-Fi subscribers can also remotely manage,
              track and bill their Internet use.
            </p>
            <p className="seg-para">
              Via our wireless LAN, we can connect guests in hotel rooms,
              restaurants, lounges and conference rooms to the virtual world of
              information, knowledge and entertainment. This translates into new
              revenue streams and sharp competitive recruiting edge for
              hospitality businesses.
            </p>
          </div>
          <div className="seg-intro-img">
            <img
              src="/public/p2p_4.jpg"
              // https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img4-450-338.jpg"
              alt="Hospitality Wifi"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Case Study Block ── */}
      <section className="seg-benefits-section-wrap">
        <div className="seg-benefits-inner">
          <div className="seg-benefits-img">
            <img
              src="https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img39-1250-610.jpg"
              alt="Mesh Network Deployment"
              loading="lazy"
            />
          </div>
          <div className="seg-benefits-content">
            <span className="al-section-tag seg-tag-blue">Case Study</span>
            <h2 className="seg-sub-heading">
              Manipal University Campus Wi-Fi Mesh Network
            </h2>
            <p className="seg-para">
              Our Wi-Fi mesh network at Manipal University Campus, South India,
              was a pioneering project and is possibly the largest network of
              its kind in the country even today. This seamless network spread
              over a 5 sq. km campus, caters to about 15,000 subscribers
              currently.
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
          <span className="al-section-tag seg-center">
            Benefits &amp; Coverage
          </span>
          <h2 className="seg-center-heading">
            Activline wireless mesh features:
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
