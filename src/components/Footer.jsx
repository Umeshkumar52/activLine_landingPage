import { Link } from "react-router-dom";

const FOOTER_POSTS = [
  {
    title: "Refundable and Cancellation is available",
    img: "/public/footer1.jpg",
  },
  {
    title: "Getting ready for the Marketing revolution.",
    img: "/public/footer2.jpg",
  },
  {
    title: "Planning business goals with a specialist.",
    img: "/public/footer3.jpg",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="al-top-footer">
        <div className="al-footer-grid">
          <div className="al-footer-col">
            <h2 className="wt">About ActivLine</h2>
            <p>
              ActivLine Fibernet – Internet Services Provider that delivers more
              than just throughput up to a Gig,
            </p>
            <p>
              our advanced networking options boast the reliability you need to
              keep your company running and growing—faster
            </p>
          </div>
          <div className="al-footer-col">
            <h2 className="wt">Get In Touch</h2>
            <p style={{ fontWeight: 700 }}>ActivLine Fibernet Pvt. Ltd.</p>
            <p style={{ fontSize: 13, marginBottom: 12 }}>
              No 132, Kantha Court, 3rd Floor, Lal Bagh Main Road, Bengaluru,
              Karnataka 560027
            </p>
            <p style={{ fontWeight: 700 }}>Phone:</p>
            <p style={{ fontSize: 13 }}>
              1800 274 6488
              <br />
              080 4979 6488
            </p>
          </div>
          <div className="al-footer-col">
            <h2 className="wt">Latest Posts</h2>
            {FOOTER_POSTS.map((p, index) => (
              <div className="al-footer-post" key={index}>
                <img src={p.img} alt="" />
                <h3>
                  <Link to="/blog">{p.title}</Link>
                </h3>
              </div>
            ))}
          </div>
          <div className="al-footer-col">
            <h2 className="wt">Categories</h2>
            <ul>
              {[
                ["Business", 4],
                ["Consultant", 1],
                ["Development", 2],
                ["Marketing", 4],
              ].map(([c, n]) => (
                <li key={c}>
                  <Link to="/blog">{c}</Link> ({n})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="al-bottom-footer">
        <div className="al-bottom-footer-inner">
          <div className="al-social-group">
            {[
              ["Facebook", "f"],
              ["Twitter", "𝕏"],
              ["Instagram", "📷"],
              ["LinkedIn", "in"],
            ].map(([label, icon]) => (
              <a key={label} href="#" aria-label={label}>
                {icon}
              </a>
            ))}
          </div>
          <div className="al-footer-right">
            Copyright © {new Date().getFullYear()} ActivLine Fibernet Pvt. Ltd.
            All Rights Reserved
            <div className="al-footer-links">
              <Link to="/delete-account">Delete Account</Link>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
              <Link to="/privacy-policies">Privacy Policies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
