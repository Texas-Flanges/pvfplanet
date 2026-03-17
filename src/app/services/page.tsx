import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | PVF Planet',
  description: 'Explore our range of services and products for industrial marketplace.',
  alternates: { canonical: 'https://pvfplanet.com/services' },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "Services",
                item: "https://pvfplanet.com/services",
              },
            ],
          }),
        }}
      />
      <div className="w-full">
      <section style={{ backgroundColor: "#0c1829", color: "#fff", padding: "48px 24px" }}>
        <div className="container-wide">
          <h1 className="text-4xl font-bold">Our Services</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div style={{ backgroundColor: "#fff", border: "2px solid #e2e8f0", borderRadius: "8px", padding: "32px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <h3 className="text-2xl font-bold mb-4">Product Supply</h3>
              <p className="mb-4">
                Complete inventory of industrial marketplace in all standard sizes, materials, and pressure ratings.
                From standard ANSI specifications to custom configurations.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Standard ANSI flanges</li>
                <li>✓ API certified products</li>
                <li>✓ Custom specifications</li>
                <li>✓ Material options</li>
              </ul>
            </div>

            <div style={{ backgroundColor: "#fff", border: "2px solid #e2e8f0", borderRadius: "8px", padding: "32px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <h3 className="text-2xl font-bold mb-4">Custom Manufacturing</h3>
              <p className="mb-4">
                When standard products don't fit your application, our engineering team designs and manufactures
                custom solutions to your exact specifications.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Engineering support</li>
                <li>✓ Rapid prototyping</li>
                <li>✓ Specialized designs</li>
                <li>✓ Quality assurance</li>
              </ul>
            </div>

            <div style={{ backgroundColor: "#fff", border: "2px solid #e2e8f0", borderRadius: "8px", padding: "32px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <h3 className="text-2xl font-bold mb-4">Technical Support</h3>
              <p className="mb-4">
                Our experienced team provides detailed technical guidance, material consultation, and application support
                to ensure you get the right product for your needs.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Application consulting</li>
                <li>✓ Material selection</li>
                <li>✓ Standards compliance</li>
                <li>✓ Performance guidance</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: "48px", backgroundColor: "#f8f9fa", padding: "32px", borderRadius: "8px" }}>
            <h3 className="text-2xl font-bold mb-4">Rush Order Fulfillment</h3>
            <p className="text-lg">
              Need it fast? We offer expedited manufacturing and shipping options to keep your projects on schedule.
              Call us at <a href="tel:+1-281-484-8325" style={{ color: "#e8590c", textDecoration: "none" }}>281-484-8325</a> to discuss your timeline.
            </p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}