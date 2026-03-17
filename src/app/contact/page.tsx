import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | PVF Planet',
  description: 'Get in touch with PVF Planet for quotes, technical support, and more information.',
  alternates: { canonical: 'https://pvfplanet.com/contact' },
};

export default function ContactPage() {
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
                name: "Contact",
                item: "https://pvfplanet.com/contact",
              },
            ],
          }),
        }}
      />
      <div className="w-full">
      <section style={{ backgroundColor: "#0c1829", color: "#fff", padding: "48px 24px" }}>
        <div className="container-wide">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p style={{ fontSize: "18px", marginTop: "8px" }}>We're here to help with your flange needs</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-lg"><a href="tel:+1-281-484-8325" style={{ color: "#e8590c", textDecoration: "none" }}>281-484-8325</a></p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-lg"><a href="mailto:sales@texasflange.com" style={{ color: "#e8590c", textDecoration: "none" }}>sales@texasflange.com</a></p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Website</h3>
                  <p className="text-lg"><a href="https://texasflange.com?ref=pvfplanet" target="_blank" rel="noopener noreferrer" style={{ color: "#e8590c", textDecoration: "none" }}>texasflange.com</a></p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "#f8f9fa", padding: "32px", borderRadius: "8px" }}>
              <h2 className="text-3xl font-bold mb-6">Quote Request</h2>
              <p className="mb-6 text-gray-700">
                For detailed quotes and rush orders, please visit our main website or call our sales team directly.
                We provide rapid response times for all inquiries.
              </p>
              <a href="https://www.texasflange.com/contact-us/?ref=pvfplanet" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                Request a Quote
              </a>
              <p className="mt-6 text-sm text-gray-600">
                Professional-grade industrial marketplace and expert technical support worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}