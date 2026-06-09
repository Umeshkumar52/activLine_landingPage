import { Link } from "react-router-dom";

export default function PrivacyPolicies() {
  return (
    <div>
      {/* Page Banner */}
      <section className="al-page-banner">
        <h1>Privacy Policies</h1>
        <div className="al-page-banner-crumbs">
          <Link to="/">Home</Link> / <span>Privacy Policies</span>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="al-welcome" style={{ background: "#fff" }}>
        <div
          style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}
        >
          <span className="al-section-tag">Privacy Commitment</span>
          <h2
            style={{
              fontSize: "24px",
              color: "#030303",
              marginBottom: "18px",
              fontWeight: "700",
            }}
          >
            Privacy Policies
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            We know that the privacy of your personal information is important
            to you. We respect your privacy and are committed to maintaining the
            confidentiality and security of any personal data which we receive
            from you and retain on your behalf.
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            We are committed to responsible data management and comply with
            applicable data protection legislation. We apply industry best
            practices to protect the security of the data stored on our systems.
            We will collect, store and use your personal information only to
            support and enhance your relationship with us. We will not sell your
            personal information to anyone. We will not disclose your personal
            information to anyone outside the Jaze Networks organisation, except
            as necessary to our trusted partners and suppliers to enable our to
            provide services to you.
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            You can browse the non-interactive parts of our website without
            giving us any personal information, although automated information
            is conveyed about your computer or mobile device and the pages on
            our site you visit. If you don’t agree with our Privacy Policy, you
            should not create an account or use our interactive services.
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            You may contact us directly if you have any questions or concerns
            about the privacy of data you give us.
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: "1.7",
              marginBottom: "40px",
            }}
          >
            We may collect information from you via this website or by e-mail,
            telephone, live chat sessions, or alternate electronic or paper
            communication.
          </p>
        </div>
      </section>
    </div>
  );
}
