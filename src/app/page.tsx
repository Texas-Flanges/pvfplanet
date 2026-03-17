import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PVF Planet | Your PVF Industry Resource Hub",
  description:
    "PVF: Pipes, Valves and Fittings. Trusted insights for engineers, buyers, and technicians navigating the industrial PVF landscape.",
  keywords:
    "PVF, pipes valves fittings, industrial PVF, flange supplier, pipe fittings, industrial valves, PVF industry",
  openGraph: {
    title: "PVF Planet | Your PVF Industry Resource Hub",
    description:
      "PVF: Pipes, Valves and Fittings. Trusted insights for engineers, buyers, and technicians navigating the industrial PVF landscape.",
    url: "https://pvfplanet.com",
    type: "website",
    images: ["/pipes-card.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PVF Planet | Your PVF Industry Resource Hub",
    description:
      "PVF: Pipes, Valves and Fittings. Trusted insights for engineers, buyers, and technicians navigating the industrial PVF landscape.",
  },
  alternates: { canonical: "https://pvfplanet.com" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PVF Planet",
              url: "https://pvfplanet.com",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-281-484-8325",
                contactType: "sales",
                email: "sales@texasflange.com",
              },
              parentOrganization: {
                "@type": "Organization",
                name: "Texas Flange & Fitting Supply",
                url: "https://texasflange.com",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PVF Planet",
              url: "https://pvfplanet.com",
              description:
                "Your PVF Industry Resource Hub. Trusted insights for engineers, buyers, and technicians.",
            },
          ]),
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            body > header.border-gray-200 { display: none !important; }
            .rv { opacity: 1; transform: none; }
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

      {/* Hero Section */}
      <section
        className="rv"
        style={{
          backgroundColor: "#0c1829",
          padding: "100px 24px",
          textAlign: "center",
          color: "#fff",
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: "24px",
            maxWidth: "700px",
          }}
        >
          Your PVF Industry Resource Hub
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.6,
            maxWidth: "600px",
            opacity: 0.95,
          }}
        >
          PVF: Pipes, Valves and Fittings.
          <br />
          Trusted insights for engineers, buyers, and technicians.
        </p>
      </section>

      {/* Three Cards: Pipes, Valves, Fittings */}
      <section
        className="rv"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "60px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              title: "Pipes",
              desc: "Learn about the most common types of industrial pipes, materials, and their primary applications.",
              img: "/pipes-card.jpg",
            },
            {
              title: "Valves",
              desc: "Get a clear overview of the basic functions and common uses for different industrial valves.",
              img: "/valves-card.jpg",
            },
            {
              title: "Fittings",
              desc: "Explore the essential fittings used to connect pipes, change direction, and complete a piping system.",
              img: "/fittings-card.jpg",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                backgroundImage: `linear-gradient(rgba(12,24,41,0.7), rgba(12,24,41,0.7)), url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                padding: "40px 24px",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                {card.title}
              </h3>
              <p style={{ fontSize: "15px", lineHeight: 1.6, opacity: 0.95 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About PVF Planet */}
      <section
        className="rv"
        style={{ padding: "80px 24px", backgroundColor: "#fff" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#0c1829",
              marginBottom: "24px",
            }}
          >
            About PVF Planet
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "20px",
            }}
          >
            The PVF industry is a foundational sector of the industrial world,
            with the acronym &ldquo;PVF&rdquo; standing for Pipes, Valves, and
            Fittings. This industry is responsible for manufacturing and
            distributing the essential components used to build and maintain
            complex piping systems. These systems are the vital arteries of
            modern civilization, transporting critical substances like water,
            oil, gas, and chemicals. From massive oil refineries and power
            generation plants to municipal waterworks and manufacturing
            facilities, the PVF industry provides the durable, reliable, and
            standardized parts necessary to control flow, manage pressure, and
            connect entire industrial processes.
          </p>
        </div>
      </section>

      {/* Sourcing & Specification */}
      <section
        className="rv"
        style={{ padding: "60px 24px", backgroundColor: "#f8f9fa" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#0c1829",
              marginBottom: "16px",
            }}
          >
            Sourcing &amp; Specification
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "20px",
            }}
          >
            Learn what to look for when specifying industrial components. Our
            resources help you understand material grades and find the right
            industrial flange supplier for your critical application.
          </p>
        </div>
      </section>

      {/* The "F" in PVF */}
      <section
        className="rv"
        style={{ padding: "60px 24px", backgroundColor: "#fff" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#0c1829",
              marginBottom: "16px",
            }}
          >
            The &ldquo;F&rdquo; in PVF: More Than Just Fittings
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "20px",
            }}
          >
            While pipes move the product and valves control it, the
            &ldquo;F&rdquo; for fittings is what holds the entire system
            together. This broad category includes components like elbows (for
            changing direction), tees (for splitting flow), and couplings (for
            joining pipe).
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "20px",
            }}
          >
            However, among the most critical fittings are industrial pipe
            flanges. Unlike welded fittings, which create a permanent joint,
            flanges are designed to be bolted together with a gasket. This
            creates a strong, reliable seal that can be safely disassembled for
            maintenance, inspection, or equipment replacement, making them an
            essential component for any serviceable piping system.
          </p>
        </div>
      </section>

      {/* Why Component Quality is Mission-Critical */}
      <section
        className="rv"
        style={{ padding: "60px 24px", backgroundColor: "#f8f9fa" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#0c1829",
              marginBottom: "16px",
            }}
          >
            Why Component Quality is Mission-Critical
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "20px",
            }}
          >
            In the PVF industry, not all parts are created equal. In
            high-stakes applications like oil and gas, petrochemical plants, or
            power generation, the environment is often high-pressure,
            high-temperature, or highly corrosive. A component failure in these
            settings is not a small leak; it can be a catastrophic event. This
            is why material certification and manufacturing quality are
            paramount. Sourcing components from a proven, reliable flange
            supplier isn&apos;t just a procurement choice, it&apos;s a critical
            decision for safety and operational integrity.
          </p>
        </div>
      </section>

      {/* Navigating Sourcing & Specifications */}
      <section
        className="rv"
        style={{ padding: "60px 24px", backgroundColor: "#fff" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#0c1829",
              marginBottom: "16px",
            }}
          >
            Navigating Sourcing &amp; Specifications
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "20px",
            }}
          >
            Understanding the specifications for your project is the first step
            to sourcing the right parts. Every component in a PVF system is
            defined by its material grade, size, and pressure rating (or
            &ldquo;Class&rdquo;). For flanges, this also includes the
            &ldquo;face type&rdquo; (like Raised Face or Ring-Type Joint) and
            the specific standard (like ASME B16.5). For a trusted partner with
            a comprehensive inventory and the technical expertise to help you
            get the exact specifications you need, we recommend visiting{" "}
            <a
              href="https://texasflange.com?ref=pvfplanet"
              style={{ color: "#e8590c", textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              texasflange.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#0c1829",
          color: "#fff",
          padding: "60px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              Contact
            </h3>
            <p style={{ fontSize: "15px", lineHeight: 1.8, marginBottom: "4px" }}>
              Phone:{" "}
              <a href="tel:+12814848325" style={{ color: "#ffffff" }}>
                +1 281-484-8325
              </a>
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.8, marginBottom: "4px" }}>
              Fax: 281-484-8730
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.8, marginBottom: "4px" }}>
              Email:{" "}
              <a href="mailto:sales@texasflange.com" style={{ color: "#ffffff" }}>
                sales@texasflange.com
              </a>
            </p>
            <p style={{ fontSize: "13px", opacity: 0.8, marginBottom: "16px" }}>
              Mon–Fri, 8 AM – 5 PM CST
            </p>
            <p style={{ fontSize: "13px", opacity: 0.7 }}>
              &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src="/footer-flange.jpg"
              alt="Industrial pipe flanges"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                maxHeight: "300px",
              }}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
// pvfplanet rebuild trigger
