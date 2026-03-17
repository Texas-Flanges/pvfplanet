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
        <p style={{ fontSize: "16px", opacity: 0.9, marginTop: "12px" }}>
          Industry insights and educational resources
        </p>
      </section>

      {/* Blog Post Card */}
      <section style={{ padding: "60px 24px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
