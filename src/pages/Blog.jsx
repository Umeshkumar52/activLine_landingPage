import { useState } from "react";
import { Link } from "react-router-dom";

const BLOG_POSTS = [
  {
    title: "Refundable and Cancellation is available",
    date: "March 5, 2025",
    author: "actlineadmin",
    cat: "Marketing",
    snippet:
      "Return Period: We accept returns within 30 days from the date of purchase. To be eligible for refundable benefits, please ensure services were not actively utilized or cancellation matches terms.",
    img: "/public/blog1.jpg",
  },
  {
    title: "Getting ready for the Marketing revolution.",
    date: "January 7, 2021",
    author: "actlineadmin",
    cat: "Marketing",
    snippet:
      "Sagittis! Nam aliquet habitant nemo enim assumenda lectus corrupti hic ullamcorper dis minima nam ac. Prepare your business goals with the latest internet services.",
    img: "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img39-1250-610.jpg",
  },
  {
    title: "Planning business goals with a specialist.",
    date: "January 7, 2021",
    author: "actlineadmin",
    cat: "Marketing",
    snippet:
      "Quas praesent repudiandae arcu hymenaeos sunt, laborum excepturi deserunt taciti, natoque enim ac mollit suspendisse, enabling better speed and connectivity profiles.",
    img: "https://www.activline.in/wp-content/uploads/2021/01/bosa-marketing-img40-1250-610.jpg",
  },
  {
    title: "Create your own Business Strategy for Growth",
    date: "January 7, 2021",
    author: "actlineadmin",
    cat: "Marketing",
    snippet:
      "Quos placeat nam duis, vivamus sint massa tempus sequi dolore suscipit. Odio magnam netus laoreet. Deploy fiber lines to scale your medium or large company.",
    img: "/public/blog3.jpg",
  },
  {
    title: "How Stay Calm from the First Time In Business.",
    date: "January 7, 2021",
    author: "actlineadmin",
    cat: "Business",
    snippet:
      "Placeat quos nam duis, vivamus sint massa tempus sequi dolore suscipit. Odio magnam netus laoreet. Manage outages, maintain backups, and setup redundancy solutions.",
    img: "/public/blog4.jpg",
  },
  {
    title: "Planning To Create A New Website Also To Make",
    date: "January 7, 2021",
    author: "actlineadmin",
    cat: "Development",
    snippet:
      "Quos placeat nam duis, vivamus sint massa tempus sequi dolore suscipit. Odio magnam netus laoreet. The right web development plans align with ultra-reliable connectivity.",
    img: "/public/blog5.jpg",
  },
  {
    title: "Development Advices for young entrepreneurs",
    date: "January 7, 2021",
    author: "actlineadmin",
    cat: "Development",
    snippet:
      "Quos placeat nam duis, vivamus sint massa tempus sequi dolore suscipit. Odio magnam netus laoreet. Learn about modern network infrastructure and cost-effective scaling.",
    img: "public/p2p_4.jpg",
  },
  {
    title: "How to make trust your competitive advantage?",
    date: "January 7, 2021",
    author: "actlineadmin",
    cat: "Marketing",
    snippet:
      "Nuos placeat nam duis, vivamus sint massa tempus sequi dolore suscipit. Odio magnam netus laoreet. Build trust with customer-centric support and 99.9% network uptime SLAs.",
    img: "/public/p2p_1.jpg",
  },
];

const CATEGORIES = [
  { label: "Business", count: 4 },
  { label: "Consultant", count: 1 },
  { label: "Development", count: 2 },
  { label: "Marketing", count: 4 },
];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.snippet.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCat ? post.cat === selectedCat : true;
    return matchesSearch && matchesCat;
  });

  return (
    <div>
      {/* ── Page Banner ── */}
      <section className="al-page-banner">
        <h1>Blog</h1>
        <div className="al-page-banner-crumbs">
          <Link to="/">Home</Link> / <span>Blog</span>
        </div>
      </section>

      {/* ── Mobile filter toggle ── */}
      <div className="blg-mobile-bar">
        <span className="blg-results-count">
          {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""}{" "}
          found
        </span>
        <button
          className="blg-filter-toggle"
          onClick={() => setSidebarOpen((v) => !v)}
          aria-expanded={sidebarOpen}
        >
          {sidebarOpen ? "✕ Close Filters" : "☰ Filters & Widgets"}
        </button>
      </div>

      {/* ── Main Layout ── */}
      <section className="al-blog-page-layout">
        <div className="al-blog-page-grid">
          {/* ── Posts list ── */}
          <div className="al-blog-posts-list">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <article className="al-blog-list-item" key={index}>
                  <div className="blg-thumb">
                    <img src={post.img} alt={post.title} loading="lazy" />
                  </div>
                  <div className="al-blog-list-body">
                    <div className="blg-meta">
                      <span className="blg-cat">{post.cat}</span>
                      <span className="blg-sep">|</span>
                      By {post.author}
                      <span className="blg-sep">|</span>
                      {post.date}
                    </div>
                    <h2 className="blg-post-title">
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        {post.title}
                      </a>
                    </h2>
                    <p className="blg-snippet">{post.snippet}</p>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="al-blog-readmore"
                    >
                      Read More →
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <div className="blg-empty">
                <h3>No posts found matching your search.</h3>
                <button
                  className="al-btn"
                  onClick={() => {
                    setSearch("");
                    setSelectedCat("");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* ── Sidebar ── */}
          <aside
            className={`al-blog-sidebar${sidebarOpen ? " sidebar-open" : ""}`}
          >
            {/* Search Widget */}
            <div className="hidden md:block al-sidebar-widget">
              <h3>Search</h3>
              <div className="al-search-box">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button>Go</button>
              </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="al-sidebar-widget">
              <h3>Recent Posts</h3>
              <div className="blg-recent-posts">
                {BLOG_POSTS.slice(0, 5).map((post, idx) => (
                  <div className="al-sidebar-post" key={idx}>
                    <img src={post.img} alt={post.title} loading="lazy" />
                    <div className="blg-recent-text">
                      <h4>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setSearch(post.title);
                            setSidebarOpen(false);
                          }}
                        >
                          {post.title}
                        </a>
                      </h4>
                      <span>{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories Widget */}
            <div className="al-sidebar-widget">
              <h3>Categories</h3>
              <ul className="blg-cat-list">
                <li
                  className={!selectedCat ? "blg-cat-active" : ""}
                  onClick={() => {
                    setSelectedCat("");
                    setSidebarOpen(false);
                  }}
                >
                  <span>All Categories</span>
                  <span>({BLOG_POSTS.length})</span>
                </li>
                {CATEGORIES.map((c) => (
                  <li
                    key={c.label}
                    className={selectedCat === c.label ? "blg-cat-active" : ""}
                    onClick={() => {
                      setSelectedCat(c.label);
                      setSidebarOpen(false);
                    }}
                  >
                    <span>{c.label}</span>
                    <span>({c.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Calendar Widget */}
            <div className="al-sidebar-widget blg-calendar-widget">
              <h3>Calendar</h3>
              <div className="blg-calendar">
                <div className="blg-cal-month">June 2026</div>
                <div className="blg-cal-grid blg-cal-header">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <div key={i}>{d}</div>
                  ))}
                </div>
                <div className="blg-cal-grid blg-cal-days">
                  {Array.from({ length: 30 }, (_, i) => {
                    const day = i + 1;
                    const isToday = day === 9;
                    return (
                      <div key={day} className={isToday ? "blg-today" : ""}>
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
