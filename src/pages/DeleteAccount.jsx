import { useState } from "react";
import { Link } from "react-router-dom";

export default function DeleteAccount() {
  const [input, setInput] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [inputErr, setInputErr] = useState(false);
  const [checkErr, setCheckErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileReg = /^[6-9]\d{9}$/;

  const reset = () => {
    setInput("");
    setAgreed(false);
    setInputErr(false);
    setCheckErr(false);
    setLoading(false);
  };

  const submit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!input || (!emailReg.test(input) && !mobileReg.test(input))) {
      setInputErr(true);
      valid = false;
    } else setInputErr(false);
    if (!agreed) {
      setCheckErr(true);
      valid = false;
    } else setCheckErr(false);
    if (!valid) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      reset();
    }, 1400);
  };

  return (
    <div>
      {/* Page Banner */}
      <section className="al-page-banner">
        <h1
        //           style="
        //   font-family: 'Black Ops One';
        //   font-size: 60px;
        //   font-weight: bold;
        //   color: white;
        //   background: linear-gradient(to right, #f4b183, #f79d65);
        //   padding: 20px 40px;
        //   text-transform: capitalize;
        //   letter-spacing: 2px;
        //   clip-path: polygon(
        //     0 0, 100% 0, 100% 80%,
        //     95% 100%, 5% 100%, 0 80%
        //   );
        // "
        >
          Delete Account
        </h1>
        <div className="al-page-banner-crumbs">
          <Link to="/">Home</Link> / <span>Delete Account</span>
        </div>
      </section>

      {/* Main Form Content */}
      <section className="al-welcome" style={{ background: "#fff" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", padding: "0 20px" }}>
          {success ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div
                className="al-success-icon"
                style={{ margin: "0 auto 20px" }}
              >
                ✅
              </div>
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  marginBottom: 12,
                  color: "#030303",
                }}
              >
                Request Submitted
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "#6b7280",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Your account deletion request has been received. We will process
                it within 7 business days and send a confirmation to your
                registered contact.
              </p>
              <button
                className="al-btn"
                style={{ borderRadius: 50 }}
                onClick={() => setSuccess(false)}
              >
                Done
              </button>
            </div>
          ) : (
            <div
              className="al-form-wrap"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,.06)" }}
            >
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  marginBottom: "18px",
                }}
              >
                Confirm Account Deletion
              </h2>
              <div className="al-warn-box" style={{ marginBottom: "20px" }}>
                <span style={{ color: "#ef4444", flexShrink: 0 }}>⚠️</span>
                <p>
                  All your data, account history and subscription details will
                  be <strong>permanently deleted</strong>. Please enter your
                  registered mobile number or email to confirm.
                </p>
              </div>
              <form onSubmit={submit}>
                <div className="al-form-group">
                  <label className="al-field-label">
                    Mobile Number or Email Address{" "}
                    <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <div className="al-field-wrap">
                    <input
                      className="al-field-input"
                      type="text"
                      placeholder="Enter mobile number or email"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                  </div>
                  {inputErr && (
                    <p
                      className="al-err"
                      style={{
                        display: "block",
                        marginTop: "-6px",
                        marginBottom: "12px",
                      }}
                    >
                      ⚠ Please enter a valid mobile number or email address.
                    </p>
                  )}
                </div>

                <div className="al-form-group">
                  <label className="al-checkbox-row">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      style={{
                        width: 18,
                        height: 18,
                        accentColor: "#ff8000",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />
                    <span>
                      I have read and agree to the{" "}
                      <a href="#">Terms &amp; Conditions</a> and understand that
                      my account will be <strong>permanently deleted</strong>{" "}
                      and cannot be recovered.
                    </span>
                  </label>
                  {checkErr && (
                    <p
                      className="al-err"
                      style={{
                        display: "block",
                        marginTop: "-16px",
                        marginBottom: "14px",
                      }}
                    >
                      ⚠ Please agree to the terms to proceed.
                    </p>
                  )}
                </div>

                <div
                  style={{ display: "flex", gap: "12px", marginTop: "20px" }}
                >
                  <Link
                    to="/"
                    className="al-btn-cancel"
                    style={{
                      textAlign: "center",
                      display: "inline-block",
                      textDecoration: "none",
                    }}
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="al-btn-delete"
                    disabled={loading}
                    style={{ flex: 1.5 }}
                  >
                    {loading ? "⏳ Processing..." : "🗑️ Delete Account"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
