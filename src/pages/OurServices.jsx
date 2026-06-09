import { Link } from "react-router-dom";

/* ── Exact data from activline.in/our-services/ ── */
const PACKAGES = [
  {
    id: "enterprises",
    title: "Enterprises Solutions",
    desc: "ActivLine Business Fiber-Optic Solutions are perfect for businesses of all sizes that demand a reliable, scalable, high-bandwidth connection, or that need to connect two or more locations together.",
    img: "/public/p2p_1.jpg",
    imgLeft: true, // image on left, text on right
  },
  {
    id: "medium",
    title: "Medium Business",
    desc: "ActivLine scalable bandwidth options give you the flexibility to pay only for what you need and to add capacity as your business grows",
    img: "/public/service2.jpg",
    imgLeft: false, // text on left, image on right
  },
  {
    id: "small",
    title: "Small Business",
    desc: "ActivLine dedicated service connects you to one of the largest and fastest networks across the state for high-speed, reliable, scalable bandwidth access service.",
    img: "/public/service3.jpg",
    imgLeft: true,
  },
  {
    id: "ultimate",
    title: "Ultimate Business",
    desc: "Bandwidth, the most useful technology of modern times which helps us not only in our daily lives but also in professional lives and educational purposes",
    img: "/public/p2p_4.jpg",
    imgLeft: false,
  },
];

export default function OurServices() {
  return (
    <div>
      {/* ── PAGE BANNER ── */}
      <section className="al-page-banner">
        <h1>Our Services</h1>
        <div className="al-page-banner-crumbs">
          <Link to="/">Home</Link> / <span>Our Services</span>
        </div>
      </section>

      {/* ── SECTION 1: Our Service heading + description ── */}
      <section className="os-intro">
        <div className="os-intro-inner">
          <h2 className="os-intro-heading">Our Service</h2>
          <p className="os-intro-desc">
            Our Service unlimited Internet Access to all your business needs, in
            the installation package we prepare optimize and proactiv monitoring
            support and provide high reliable services with cost effective.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Business packages — alternating 50/50 rows with dividers ── */}
      <section className="os-packages">
        <div className="os-packages-inner">
          {PACKAGES.map((pkg, idx) => (
            <div key={pkg.id}>
              <div
                className={`os-pkg-row ${pkg.imgLeft ? "img-left" : "img-right"}`}
              >
                <div className="os-pkg-image">
                  <img src={pkg.img} alt={pkg.title} />
                </div>
                <div className="os-pkg-text">
                  <h2 className="os-pkg-title">{pkg.title}</h2>
                  <p className="os-pkg-desc">{pkg.desc}</p>
                </div>
              </div>
              {/* Divider between rows (not after last) */}
              {idx < PACKAGES.length - 1 && <div className="os-divider"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: CTA ── */}
      <section className="os-cta">
        <div className="os-cta-inner">
          <div className="os-cta-text">
            <h2 className="os-cta-heading">
              Get Better Solution For Your Business
            </h2>
            <p className="os-cta-desc">
              Let us give you more details about the special offer on Internet
              Services you want. We have tailored solution for all your
              requirements!
            </p>
            <Link to="/contact" className="al-btn al-btn-round os-cta-btn">
              <i className="fas fa-phone-alt" style={{ marginRight: 8 }}></i>
              Contact Us Now!
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
