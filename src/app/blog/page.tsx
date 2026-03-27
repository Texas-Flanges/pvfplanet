import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | PVF Planet",
  description:
    "Articles and insights about the Pipes, Valves and Fittings industry from PVF Planet.",
  alternates: { canonical: "https://pvfplanet.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body > header.border-gray-200 { display: none !important; }
          `,
        }}
      />

      {/* Navigation */}
      <nav
        style={{
          backgroundColor: "#0c1829",
          padding: "16px 0",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            PVF Planet
          </Link>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Link
              href="/"
              style={{ color: "#fff", textDecoration: "none", fontSize: "15px" }}
            >
              Home
            </Link>
            <Link
              href="/blog"
              style={{ color: "#fff", textDecoration: "none", fontSize: "15px" }}
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Blog Header */}
      <section
        style={{
          backgroundColor: "#0c1829",
          padding: "60px 24px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "36px", fontWeight: 700 }}>PVF Planet Blog</h1>
        <p style={{ fontSize: "16px", opacity: 0.9, marginTop: "12px", marginBottom: "32px" }}>
          Industry insights and educational resources
        </p>
        <img
          src="/pvfplanet-banner.jpg"
          alt="PVF Planet - Industrial Pipes, Valves, and Fittings"
          style={{
            maxWidth: "100%",
            width: "600px",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </section>

      {/* Blog Post Cards */}
      <section style={{ padding: "60px 24px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
          <Link
            href="/blog/inside-the-world-of-pipes-valves-and-fittings"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <article
              style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src="/blog-header.jpg"
                alt="Inside the World of Pipes, Valves, and Fittings"
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <div style={{ padding: "24px" }}>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#888",
                    marginBottom: "8px",
                  }}
                >
                  May 8, 2024
                </p>
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#0c1829",
                    marginBottom: "12px",
                  }}
                >
                  Inside the World of Pipes, Valves, and Fittings
                </h2>
                <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#555" }}>
                  Take an in-depth look at the PVF industry and discover why
                  pipes, valves, and fittings are the backbone of modern
                  industrial infrastructure.
                </p>
              </div>
            </article>
          </Link>

          {/* Additional Blog Posts */}
          <article
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              display: "grid",
              gridTemplateColumns: "200px 1fr",
            }}
          >
            <img
              src="/field-pipe.jpg"
              alt="Pipeline field installation"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ padding: "24px" }}>
              <p style={{ fontSize: "13px", color: "#888", marginBottom: "8px" }}>
                July 15, 2024
              </p>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#0c1829",
                  marginBottom: "8px",
                }}
              >
                Understanding Carbon Steel Pipe Grades and Schedules
              </h2>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#555" }}>
                A practical guide to selecting the right pipe grade and wall thickness for your project - from standard A106 Grade B to high-yield applications.
              </p>
            </div>
          </article>

          <article
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              display: "grid",
              gridTemplateColumns: "200px 1fr",
            }}
          >
            <img
              src="/elbow-pipe.jpg"
              alt="Steel pipe elbow fitting"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ padding: "24px" }}>
              <p style={{ fontSize: "13px", color: "#888", marginBottom: "8px" }}>
                September 3, 2024
              </p>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#0c1829",
                  marginBottom: "8px",
                }}
              >
                Butt-Weld Fittings: Elbows, Tees, and Reducers Explained
              </h2>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#555" }}>
                How butt-weld fittings connect and redirect piping systems. Covers long radius vs. short radius elbows, equal and reducing tees, and concentric vs. eccentric reducers.
              </p>
            </div>
          </article>

          <article
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              display: "grid",
              gridTemplateColumns: "200px 1fr",
            }}
          >
            <img
              src="/warehouse-flange.jpg"
              alt="Gate valve and flanges in warehouse"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ padding: "24px" }}>
              <p style={{ fontSize: "13px", color: "#888", marginBottom: "8px" }}>
                November 12, 2024
              </p>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#0c1829",
                  marginBottom: "8px",
                }}
              >
                Gate Valves vs. Ball Valves: Choosing the Right Valve
              </h2>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#555" }}>
                Comparing the two most common isolation valves in the PVF industry. Learn when to specify gate valves for full-bore flow and when ball valves offer a better solution.
              </p>
            </div>
          </article>

          <article
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              display: "grid",
              gridTemplateColumns: "200px 1fr",
            }}
          >
            <img
              src="/fittings-card.jpg"
              alt="Industrial pipe fittings"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ padding: "24px" }}>
              <p style={{ fontSize: "13px", color: "#888", marginBottom: "8px" }}>
                January 20, 2025
              </p>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#0c1829",
                  marginBottom: "8px",
                }}
              >
                ASME vs. API: Understanding PVF Industry Standards
              </h2>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#555" }}>
                A breakdown of the major standards governing pipes, valves, and fittings - from ASME B16.5 flanges to API 600 gate valves and everything in between.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#0c1829",
          color: "#fff",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "13px", opacity: 0.7 }}>
          &copy; {new Date().getFullYear()} PVF Planet. All rights reserved.
        </p>
      </footer>
    </>
  );
}
