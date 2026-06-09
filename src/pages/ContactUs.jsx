import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const [form, setForm] = useState({
    fname: "", lname: "", email: "", mobile: "", message: "",
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
      {/* ── PAGE BANNER ── */}
      <section className="al-page-banner">
        <h1>Contact Us</h1>
        <div className="al-page-banner-crumbs">
          <Link to="/">Home</Link> / <span>Contact Us</span>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION: 50/50 split ── */}
      <section className="cu-main">
        <div className="cu-main-inner">

          {/* LEFT: Icon-boxes stacked */}
          <div className="cu-info-col">
            {/* Address */}
            <div className="cu-icon-box">
              <div className="cu-icon-circle">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <div className="cu-icon-content">
                <h3>ActivLine Fibernet Pvt. Ltd.</h3>
                <p>No 132, Kantha Court, 3rd Floor, Lal Bagh Main Road, Bengaluru, Karnataka 560027</p>
              </div>
            </div>

            {/* Email */}
            <div className="cu-icon-box">
              <div className="cu-icon-circle">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div className="cu-icon-content">
                <h3>Email:</h3>
                <p>info@activline.in Support@activline.in</p>
              </div>
            </div>

            {/* Phone */}
            <div className="cu-icon-box">
              <div className="cu-icon-circle">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="cu-icon-content">
                <h3>Phone:</h3>
                <p>1800 274 6488<br />080 4979 6488</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Request A Quote form card */}
          <div className="cu-form-col">
            <div className="cu-form-card">
              <h2 className="cu-form-title">Request A Quote</h2>
              <p className="cu-form-subtitle">
                Let us give you more details about the special offer on Internet
                Services you want us. Please fill out the form below.
                We have tailored solution for all your requirements!
              </p>

              {submitted && (
                <div className="cu-success">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="cu-form-row">
                  <div className="cu-form-group">
                    <input
                      name="fname"
                      value={form.fname}
                      onChange={handleChange}
                      placeholder="First Name*"
                      required
                    />
                  </div>
                  <div className="cu-form-group">
                    <input
                      name="lname"
                      value={form.lname}
                      onChange={handleChange}
                      placeholder="Last Name*"
                      required
                    />
                  </div>
                </div>
                <div className="cu-form-row">
                  <div className="cu-form-group">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Id*"
                      required
                    />
                  </div>
                  <div className="cu-form-group">
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
                <div className="cu-form-group cu-textarea-group">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message*"
                  />
                </div>
                <div className="cu-form-submit">
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ── GOOGLE MAP — full width ── */}
      <section className="cu-map">
        <iframe
          title="ActivLine Fibernet Private Limited"
          src="https://maps.google.com/maps?q=ActivLine%20Fibernet%20Private%20Limited&t=m&z=10&output=embed&iwloc=near"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
}
