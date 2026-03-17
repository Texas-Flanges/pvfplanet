import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | PVF Planet',
  description: 'Learn about PVF Planet and our commitment to quality industrial marketplace.',
  alternates: { canonical: 'https://pvfplanet.com/about' },
};

export default function AboutPage() {
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
                name: "About",
                item: "https://pvfplanet.com/about",
              },
            ],
          }),
        }}
      />
      <div className="w-full">
      <section style={{ backgroundColor: "#0c1829", color: "#fff", padding: "48px 24px" }}>
        <div className="container-wide">
          <h1 className="text-4xl font-bold">About PVF Planet</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg mb-4">
            PVF Planet is a leading supplier of premium industrial marketplace serving the South Texas Industrial and beyond.
            With a commitment to quality, reliability, and customer service, we have established ourselves as a trusted partner
            for engineers and procurement professionals across multiple industries.
          </p>
          <p className="text-lg mb-4">
            We combine decades of manufacturing expertise with cutting-edge production capabilities
            to deliver products that exceed industry standards. Whether you need standard specifications or custom-engineered solutions,
            our team is equipped to meet your requirements.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Our Commitment</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex gap-4">
              <span style={{ color: "#e8590c", fontWeight: 700 }}>✓</span>
              <span><strong>Quality First:</strong> Every product undergoes rigorous testing and inspection.</span>
            </li>
            <li className="flex gap-4">
              <span style={{ color: "#e8590c", fontWeight: 700 }}>✓</span>
              <span><strong>Expert Support:</strong> Our engineers are available to help with technical questions and specifications.</span>
            </li>
            <li className="flex gap-4">
              <span style={{ color: "#e8590c", fontWeight: 700 }}>✓</span>
              <span><strong>Competitive Pricing:</strong> Direct manufacturing means better value for our customers.</span>
            </li>
            <li className="flex gap-4">
              <span style={{ color: "#e8590c", fontWeight: 700 }}>✓</span>
              <span><strong>Fast Delivery:</strong> Extensive inventory and rapid fulfillment capabilities.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 mt-12">Serving Global Industries</h2>
          <p className="text-lg">
            We proudly serve customers worldwide, delivering products and expertise to leading industrial companies,
            engineering firms, and equipment manufacturers. Our deep understanding of industry needs allows us to provide
            tailored solutions that meet the highest standards.
          </p>
        </div>
      </section>
      </div>
    </>
  );
}