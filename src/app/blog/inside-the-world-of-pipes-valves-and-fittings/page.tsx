import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Inside the World of Pipes, Valves, and Fittings | PVF Planet",
  description:
    "Take an in-depth look at the PVF industry and discover why pipes, valves, and fittings are the backbone of modern industrial infrastructure.",
  openGraph: {
    title: "Inside the World of Pipes, Valves, and Fittings",
    description:
      "Take an in-depth look at the PVF industry and discover why pipes, valves, and fittings are the backbone of modern industrial infrastructure.",
    url: "https://pvfplanet.com/blog/inside-the-world-of-pipes-valves-and-fittings",
    type: "article",
    images: ["/blog-header.jpg"],
  },
  alternates: {
    canonical:
      "https://pvfplanet.com/blog/inside-the-world-of-pipes-valves-and-fittings",
  },
};

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Inside the World of Pipes, Valves, and Fittings",
              datePublished: "2024-05-08",
              author: {
                "@type": "Organization",
                name: "PVF Planet",
              },
              publisher: {
                "@type": "Organization",
                name: "PVF Planet",
                url: "https://pvfplanet.com",
              },
              image: "https://pvfplanet.com/blog-header.jpg",
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://pvfplanet.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://pvfplanet.com/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Inside the World of Pipes, Valves, and Fittings",
                  item: "https://pvfplanet.com/blog/inside-the-world-of-pipes-valves-and-fittings",
                },
              ],
            },
          ]),
        }}
      />

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

      {/* Hero Image */}
      <div
        style={{
          width: "100%",
          height: "400px",
          backgroundImage:
            "linear-gradient(rgba(12,24,41,0.5), rgba(12,24,41,0.5)), url(/blog-header.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            textAlign: "center",
            maxWidth: "800px",
            padding: "0 24px",
          }}
        >
          Inside the World of Pipes, Valves, and Fittings
        </h1>
      </div>

      {/* Article Content */}
      <article style={{ padding: "60px 24px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "13px",
              color: "#888",
              marginBottom: "32px",
            }}
          >
            Published May 8, 2024
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "24px",
            }}
          >
            The world of Pipes, Valves, and Fittings (PVF) is essential to the
            functioning of industries globally. These components form the
            backbone of systems used in oil and gas, water treatment, chemical
            processing, power generation, and many other sectors. Understanding
            the basics of PVF is crucial for engineers, procurement
            professionals, and anyone involved in industrial infrastructure.
          </p>

          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#0c1829",
              marginBottom: "16px",
              marginTop: "40px",
            }}
          >
            Pipes: The Arteries of Industry
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "24px",
            }}
          >
            Pipes are the fundamental building blocks of any piping system. They
            transport fluids, gases, and sometimes solids from one point to
            another. Industrial pipes come in a wide range of materials,
            including carbon steel, stainless steel, alloy steel, and various
            plastics. The choice of material depends on factors such as the
            substance being transported, operating temperature and pressure, and
            environmental conditions.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "24px",
            }}
          >
            Pipes are manufactured to strict standards set by organizations like
            the American Society for Testing and Materials (ASTM) and the
            American Petroleum Institute (API). These standards ensure
            consistency in dimensions, material properties, and performance
            characteristics across the industry.
          </p>

          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#0c1829",
              marginBottom: "16px",
              marginTop: "40px",
            }}
          >
            Valves: Controlling the Flow
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "24px",
            }}
          >
            Valves are devices used to control the flow of fluids within a
            piping system. They can start, stop, regulate, or redirect flow
            depending on their design. Common types of industrial valves include
            gate valves (for on/off control), globe valves (for throttling),
            ball valves (for quick shut-off), check valves (to prevent
            backflow), and butterfly valves (for large-diameter applications).
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "24px",
            }}
          >
            The selection of a valve type depends on the specific application,
            including the type of fluid, pressure and temperature requirements,
            and the need for precise flow control. Proper valve selection is
            critical for system safety and efficiency.
          </p>

          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#0c1829",
              marginBottom: "16px",
              marginTop: "40px",
            }}
          >
            Fittings: Connecting It All Together
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "24px",
            }}
          >
            Fittings are the components that connect pipes, change their
            direction, branch off, or reduce their size. They are essential for
            creating a complete and functional piping system. Common types of
            fittings include elbows, tees, reducers, couplings, and flanges.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "24px",
            }}
          >
            Among fittings, flanges hold a special place. They provide a
            detachable connection point in a piping system, allowing for easy
            maintenance, inspection, and modification. Flanges are bolted
            together with a gasket between them to create a seal. They come in
            various types such as weld neck, slip-on, blind, socket weld, and
            threaded, each suited for different applications and pressure
            ratings.
          </p>

          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#0c1829",
              marginBottom: "16px",
              marginTop: "40px",
            }}
          >
            The Importance of Quality and Standards
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "24px",
            }}
          >
            In the PVF industry, quality is not optional. Components that fail
            in service can lead to leaks, environmental damage, production
            downtime, and even safety hazards. This is why adherence to industry
            standards and sourcing from reputable suppliers is paramount.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "24px",
            }}
          >
            Organizations like ASME, ASTM, API, and MSS set the standards that
            govern the design, manufacture, and testing of PVF components. When
            sourcing materials, always verify that your supplier can provide
            proper material certifications and traceability documentation.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#4a5568",
              marginBottom: "24px",
            }}
          >
            For reliable PVF components, particularly industrial flanges with
            full material traceability and certifications, visit{" "}
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

          {/* Back to Blog */}
          <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid #e2e8f0" }}>
            <Link
              href="/blog"
              style={{
                color: "#0c1829",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </article>

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
