import { Link } from "react-router-dom";

const SEGMENTS = [
  {
    title: "Campus Wifi",
    desc: "At Activline, we are delighted to be a part of the 'always on' lives of academic communities. Our on-campus wireless P2P service provides instant plug and play access to students, faculty and staff members.",
    img: "/public/footer2.jpg",
    icon: "fas fa-wifi",
    path: "/segments/campus-wifi",
  },
  {
    title: "Residential",
    desc: "ActivLine Networks is committed to helping you maximize the return on your wireless broadband investments. We offer technical support to keep your network operating efficiently and reliably.",
    img: "/public/p2p_2.jpg",
    icon: "fas fa-home",
    path: "/segments/residential",
  },
  {
    title: "Corporate",
    desc: "Dedicated enterprise bandwidth, technical support services, and large scale support configurations to help ensure your network stays highly available and operational.",
    img: "/public/blog6.jpg",
    // " https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img5-450-338.jpg",
    icon: "fas fa-building",
    path: "/segments/corporate",
  },
  {
    title: "Hospitality",
    desc: "Wi-Fi mesh networks deployed in large scale campuses and hospitality domains. Catering to thousands of active subscribers with seamless wireless coverage maps.",
    img: "/public/p2p_4.jpg",
    icon: "fas fa-hotel",
    path: "/segments/hospitality",
  },
];

export default function Segments() {
  return (
    <div>
      {/* ── Page Banner ── */}
      <section className="al-page-banner">
        <h1>Our Segments</h1>
        <div className="al-page-banner-crumbs">
          <Link to="/">Home</Link> / <span>Segments</span>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="sgp-intro">
        <div className="sgp-intro-inner">
          <span className="al-section-tag">
            Business &amp; Community Segments
          </span>
          <p className="sgp-intro-desc">
            ActivLine tailors specialized broadband and wireless infrastructure
            solutions across several key sectors, offering robust connectivity
            and dedicated monitoring.
          </p>
        </div>
      </section>

      {/* ── Segments Cards Grid ── */}
      <section className="sgp-section">
        <div className="sgp-grid">
          {SEGMENTS.map((s) => (
            <div className="sgp-card" key={s.title}>
              <div className="sgp-card-img-wrap">
                <img src={s.img} alt={s.title} loading="lazy" />
                <div className="sgp-card-icon-wrap">
                  <i className={s.icon}></i>
                </div>
              </div>
              <div className="sgp-card-body">
                <h2 className="sgp-card-title">{s.title}</h2>
                <p className="sgp-card-desc">{s.desc}</p>
                <Link to={s.path} className="sgp-card-link">
                  View Details <span className="sgp-arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
