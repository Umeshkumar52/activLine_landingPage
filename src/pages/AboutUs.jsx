import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const STATS = [
  { label: "Service Experienced", pct: 90 },
  { label: "Professional Team", pct: 75 },
  { label: "Customer Satisfactions", pct: 100 },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Making Ideas",
    desc: "Brainstorming and gathering network requirements tailored to client needs.",
  },
  {
    num: "02",
    title: "Working Plan",
    desc: "Drafting detailed fiber routing and wireless mapping projects.",
  },
  {
    num: "03",
    title: "Research",
    desc: "Analysing latency, bandwidth usage patterns, and redundancy paths.",
  },
  {
    num: "04",
    title: "Launch Project",
    desc: "Physical deployment, configuration, and proactive network monitoring.",
  },
];

export default function AboutUs() {
  const statsRef = useRef(null);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [widths, setWidths] = useState(STATS.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          setWidths(STATS.map((s) => s.pct));
        }
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsAnimated]);

  return (
    <div>
      {/* ── Page Banner ── */}
      <section className="al-page-banner">
        <h1>About Us</h1>
        <div className="al-page-banner-crumbs">
          <Link to="/">Home</Link> / <span>About Us</span>
        </div>
      </section>

      {/* ── Welcome Block ── */}
      <section className="abt-welcome">
        <div className="abt-welcome-inner">
          <div className="abt-welcome-text">
            <span className="al-section-tag">Welcome to</span>
            <h2 className="abt-brand-heading">
              ActivLine Fibernet Private Limited
            </h2>
            <p className="abt-para">
              ActivLine is Karnataka's largest private Internet Service
              Provider. Today ActivLine has covered the entire Karnataka with
              over 75% of world-class optical fiber network Technology and
              Advance Wireless Technology. The technology deployed by ActivLine
              are connected through very reliable and high capacity Transmission
              links on optical fiber cables, providing high quality
              uninterrupted and reliable services. We are the first ISP in State
              with 100% wireless redundancy of our entire Fiber optics mesh
              network having more than STM4 bandwidth pool. In addition to this
              we offer various Data Connectivity and Internet services. We bring
              you the benefit of quick deployment of connectivity, hassle-free
              connectivity, Reliable and scalable solution on state of the art
              network backbone with highest uptime.
            </p>
          </div>
          <div className="abt-welcome-img">
            <img
              src="/public/banner2.png"
              alt="About ActivLine"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Infrastructure Block ── */}
      <section className="abt-infra">
        <div className="abt-infra-inner">
          <div className="abt-infra-img">
            <img
              src="/public/about2.jpg"
              // "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img40-1250-610.jpg"
              alt="RF and Fibre Infrastructure"
              loading="lazy"
            />
          </div>
          <div className="abt-infra-text">
            <span className="al-section-tag abt-tag-blue">Infrastructure</span>
            <h2 className="abt-section-heading">
              RF and Fibre-Optic Infrastructure / High Speed Internet Services
            </h2>
            <p className="abt-para">
              ActivLine scalable bandwidth options give you the flexibility to
              pay only for what you need and to add capacity as your business
              grows. While competing solutions promise high speed, an Internet
              through fibre-optic infrastructure offers the best combination of
              reliability, scalability, and bandwidth and cost effectiveness.
            </p>
            <p className="abt-para">
              Other Internet solutions often force companies to share bandwidth,
              meaning the highest speed may not be experienced at all times –
              especially during peak hours. DILL provides a dedicated internet
              through fiber-optic connection from your business to ActivLine's
              network, leveraging our nationwide fibre backbone to provide the
              fast, reliable Internet connectivity your business depends on.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats Block ── */}
      <section className="abt-stats" ref={statsRef}>
        <div className="abt-stats-inner">
          {/* Left — progress bars */}
          <div className="abt-stats-left">
            <span className="al-section-tag">
              With ActivLine, You'll Always Get
            </span>
            <h3 className="abt-stats-sub">
              ActivLine scalable options give you the flexibility to pay only
              for what you need and to add capacity as your business grows.
            </h3>
            <div className="abt-bars-wrap">
              {STATS.map((s, i) => (
                <div className="al-stat-item" key={s.label}>
                  <div className="al-stat-label">
                    <span>{s.label}</span>
                    <span>{s.pct}%</span>
                  </div>
                  <div className="al-stat-bar">
                    <div
                      className="al-stat-fill"
                      style={{ width: `${widths[i]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — profile card */}
          <div className="abt-stats-right">
            <div className="abt-profile-card">
              <img
                src="https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img25-250-250.jpg"
                alt="ActivLine Profile"
                className="abt-profile-img"
              />
              <h3 className="abt-profile-name">ActivLine</h3>
              <p className="abt-profile-role">Internet Services Provider</p>
              <a
                href="tel:18002576488"
                className="al-btn al-btn-round abt-call-btn"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Working Process Block ── */}
      <section className="abt-process">
        <div className="abt-process-inner">
          <span className="al-section-tag">How We Work</span>
          <h2 className="abt-section-heading">Our Working Process</h2>
          <div className="abt-process-grid">
            {PROCESS_STEPS.map((step) => (
              <div className="abt-process-step" key={step.num}>
                <div className="abt-step-num">{step.num}</div>
                <h4 className="abt-step-title">{step.title}</h4>
                <p className="abt-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
