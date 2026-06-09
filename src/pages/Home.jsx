import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ── DATA ── */
const ICON_BOXES = [
  {
    icon: "fas fa-wifi",
    title: "High Speed",
    desc: "Fiber-Optic Solutions are perfect for businesses",
  },
  {
    icon: "fas fa-tasks",
    title: "Flexibility",
    desc: "Scalable bandwidth options give you the flexibility",
  },
  {
    icon: "fas fa-space-shuttle",
    title: "Accelerate",
    desc: "The most useful technology of modern times",
  },
];

const P2P_ITEMS = [
  {
    label: "Enterprises Solutions",
    icon: "fas fa-building",
    img: "/public/p2p_1.jpg",
    //  "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img39-1250-610.jpg",
    desc: "ActivLine Business Fiber-Optic Solutions are perfect for businesses of all sizes that demand a reliable, scalable, high-bandwidth connection, or that need to connect two or more locations together.",
  },
  {
    label: "Medium Business",
    icon: "fas fa-business-time",
    img: "/public/p2p_2.jpg",
    // "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img13-450-338.jpg",
    desc: "ActivLine scalable bandwidth options give you the flexibility to pay only for what you need and to add capacity as your business grows",
  },
  {
    label: "Small Business",
    icon: "fas fa-coffee",
    img: "public/p2p_3.jpg",
    // "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img5-450-338.jpg",
    desc: "ActivLine dedicated service connects you to one of the largest and fastest networks across the state for high-speed, reliable, scalable bandwidth access service.",
  },
  {
    label: "Ultimate Business",
    icon: "fas fa-users",
    img: "/public/p2p_4.jpg",
    // "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img4-450-338.jpg",
    desc: "Bandwidth, the most useful technology of modern times which helps us not only in our daily lives but also in professional lives and educational purposes",
  },
];

const STATS = [
  { label: "Service Experienced", pct: 90 },
  { label: "Professional Team", pct: 75 },
  { label: "Customer Satisfactions", pct: 100 },
];

const SERVICES = [
  {
    title: "Network Solution",
    img: "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img39-1250-610.jpg",
  },
  {
    title: "Point to Point Solution",
    img: "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img13-450-338.jpg",
  },
  {
    title: "Campus WiFi",
    img: "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img5-450-338.jpg",
  },
  {
    title: "Wi-Fi Solution",
    img: "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img4-450-338.jpg",
  },
  {
    title: "Event Management",
    img: "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img27-970-610.jpg",
  },
  {
    title: "Managed Services",
    img: "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img28-970-610.jpg",
  },
];

const BLOG_POSTS = [
  {
    bg: "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img27-970-610.jpg",
    author: "actlineadmin",
    date: "January 7, 2021",
    title: "How to start a home-based business?",
    href: "/blog",
  },
  {
    bg: "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img28-970-610.jpg",
    author: "actlineadmin",
    date: "January 7, 2021",
    title: "Development Advices for young entrepreneurs",
    href: "/blog",
  },
  {
    bg: "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img29-970-610.jpg",
    author: "actlineadmin",
    date: "January 7, 2021",
    title: "Planning To Create A New Website Also To Make",
    href: "/blog",
  },
];

export default function Home() {
  /* stats animation */
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

  /* contact form */
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ fname: "", lname: "", email: "", mobile: "", message: "" });
  };

  return (
    <div>
      {/* ── HERO ── */}
      <section className="al-hero">
        <div className="al-hero-bg">
          <div className="al-hero-content">
            <h1 className="al-hero-title">
              The Ultimate Business-Ready Solution
            </h1>
            <div className="al-hero-text">
              ActivLine is a next generation Internet Service Provider,
              <br />
              best service for your personal and professional internet needs.
            </div>
            <Link to="/contact" className="al-btn al-hero-cta">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* ── ICON BOXES ── */}
      <section className="al-icon-boxes">
        <div className="al-icon-boxes-grid">
          {ICON_BOXES.map((b) => (
            <div className="al-icon-box" key={b.title}>
              <div className="al-icon-box-icon">
                <i className={b.icon}></i>
              </div>
              <div className="al-icon-box-content">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WELCOME / ABOUT ── */}
      <section className="al-welcome" id="about">
        <div className="al-welcome-inner">
          <div className="al-welcome-text">
            <h2 className="al-section-tag">Welcome to ActivLine</h2>
            <h3>
              ActivLine is an ISP (Internet Service Provider) firm registered
              under Department of Telecommunication.
            </h3>
            <p>
              ActivLine is Karnataka's largest private Internet Service
              Provider. Today ActivLine has covered the entire Karnataka with
              over 75% of world-class optical fiber network Technology and
              Advance Wireless Technology. The technology deployed by ActivLine
              are connected through very reliable and high capacity Transmission
              links on optical fiber cables, providing high quality
              uninterrupted and reliable services.
            </p>
            <Link to="/about" className="al-btn al-btn-plane">
              Read More{" "}
              <i className="fas fa-paper-plane" style={{ marginLeft: 8 }}></i>
            </Link>
          </div>
          <div className="al-welcome-img">
            <img
              src="https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img39-1250-610.jpg"
              alt="About ActivLine"
            />
          </div>
        </div>
      </section>

      {/* ── P2P SOLUTIONS ── */}
      <section className="al-p2p">
        <div className="al-p2p-header">
          <h2 className="al-section-tag">ActivLine P2P solutions</h2>
          <h3>
            Dedicated, Direct P2P connection using our Nationwide Fibre Backbone
          </h3>
        </div>
        <div className="al-p2p-grid">
          {P2P_ITEMS.map((item) => (
            <div className="al-p2p-item" key={item.label}>
              <img src={item.img} alt={item.label} />
              <div className="al-p2p-icon-circle">
                <i className={item.icon}></i>
              </div>
              <h2 className="al-p2p-title">
                <a href="#">{item.label}</a>
              </h2>
              <p className="al-p2p-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="al-stats" ref={statsRef}>
        <div className="al-stats-inner">
          {/* Left: Banner Image */}
          <div className="al-stats-image">
            <img
              src="/public/banner2.png"
              // "https://www.activline.in/wp-content/uploads/2022/01/banner2.png"
              alt="ActivLine Banner"
            />
          </div>
          {/* Right: Text + Progress + Profile */}
          <div className="al-stats-right">
            <div className="al-stats-top">
              <h2 className="al-section-tag al-section-tag-dark">
                With ActivLine, You'll Always Get
              </h2>
              <h3>
                ActivLine scalable options give you the flexibility to pay only
                for what you need and to add capacity as your business grows.
              </h3>
              <div className="al-stats-bars">
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
            <div className="al-stats-profile-row">
              <div className="al-stats-profile">
                <img
                  src="https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img25-250-250.jpg"
                  alt="ActivLine"
                />
                <div className="al-stats-profile-text">
                  <h3>ActivLine</h3>
                  <p>Internet Services Provider</p>
                </div>
              </div>
              <a
                href="tel:18002746488"
                className="al-btn al-btn-round al-btn-call"
              >
                <i className="fas fa-phone-alt" style={{ marginRight: 8 }}></i>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="al-services" id="services">
        <div className="al-services-container">
          <div className="al-services-top">
            <div className="al-services-top-left">
              <h2 className="al-section-tag">Our Services</h2>
              <p>
                Our Service unlimited Internet Access to all your business
                needs, in the installation package we prepare optimize and
                proactiv monitoring support and provide high reliable services
                with cost effective.
              </p>
              <Link to="/contact" className="al-btn al-btn-round">
                Contact Us
              </Link>
            </div>
            <div className="al-services-cards-wrap">
              {SERVICES.map((s) => (
                <div className="al-service-card" key={s.title}>
                  <h2>
                    <a href="#">{s.title}</a>
                  </h2>
                  <img src={s.img} alt={s.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG (Posts Carousel style) ── */}
      <section className="al-blog" id="blog">
        <div className="al-blog-container">
          <div className="al-blog-header">
            <h2 className="al-section-tag">Read Our Latest News</h2>
            <Link to="/blog" className="al-blog-more">
              Read More
            </Link>
          </div>
          <div className="al-blog-grid">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.title}
                className="al-blog-card-bg"
                style={{ backgroundImage: `url(${post.bg})` }}
              >
                <div className="al-blog-overlay"></div>
                <div className="al-blog-card-content">
                  <div className="al-blog-meta">
                    <a href="#">{post.author}</a> | {post.date}
                  </div>
                  <h2 className="al-blog-title">
                    <Link to="/blog">{post.title}</Link>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH / CONTACT ── */}
      <section className="al-contact" id="contact">
        <div className="al-contact-container">
          {/* Header info boxes */}
          <div className="al-contact-header">
            <h2 className="al-section-tag al-section-tag-dark">Get In Touch</h2>
            <p>
              Let us give you more details about the special offer on Internet
              Services you want. We have tailored solution for all your
              requirements!
            </p>
          </div>
          <div className="al-contact-info-row">
            <div className="al-ci-box">
              <div className="al-ci-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <div className="al-ci-text">
                <h3>ActivLine Fibernet Pvt. Ltd.</h3>
                <p>
                  No 132, Kantha Court, 3rd Floor, Lal Bagh Main Road,
                  Bengaluru, Karnataka 560027
                </p>
              </div>
            </div>
            <div className="al-ci-box">
              <div className="al-ci-icon">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div className="al-ci-text">
                <h3>Email:</h3>
                <p>
                  info@activline.in
                  <br />
                  Support@activline.in
                </p>
              </div>
            </div>
            <div className="al-ci-box">
              <div className="al-ci-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="al-ci-text">
                <h3>Phone No.:</h3>
                <p>
                  1800 274 6488
                  <br />
                  080 4979 6488
                </p>
              </div>
            </div>
          </div>

          {/* Form section: image + form side-by-side */}
          <div className="al-contact-form-row">
            <div className="al-contact-image">
              <img
                src="/public/bosa-marketing-img32-468-525.png"
                // "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img32-468-525.png"
                alt="Contact ActivLine"
              />
            </div>
            <div className="al-form-wrap">
              <h2>Drop us a&nbsp;Line</h2>
              {submitted && (
                <div className="al-form-success">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="al-form-row">
                  <div className="al-form-group">
                    <input
                      name="fname"
                      value={form.fname}
                      onChange={handleChange}
                      placeholder="First Name*"
                      required
                    />
                  </div>
                  <div className="al-form-group">
                    <input
                      name="lname"
                      value={form.lname}
                      onChange={handleChange}
                      placeholder="Last Name*"
                      required
                    />
                  </div>
                </div>
                <div className="al-form-row">
                  <div className="al-form-group">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Id*"
                      required
                    />
                  </div>
                  <div className="al-form-group">
                    <input
                      name="mobile"
                      type="tel"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="Mobile Number*"
                      required
                    />
                  </div>
                </div>
                <div className="al-form-group">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message*"
                  />
                </div>
                <div className="al-form-submit">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
