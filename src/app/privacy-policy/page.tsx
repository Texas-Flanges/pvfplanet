import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | PVF Planet',
  description: 'Privacy policy for PVF Planet. Learn how we protect your information.',
  alternates: { canonical: 'https://pvfplanet.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
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
                name: "Privacy Policy",
                item: "https://pvfplanet.com/privacy-policy",
              },
            ],
          }),
        }}
      />
      <div className="w-full">
        <section style={{ backgroundColor: "#0c1829", color: "#fff", padding: "48px 24px" }}>
          <div className="container-wide">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container-wide max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">1. Introduction</h2>
              <p className="text-lg mb-4">
                PVF Planet ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website pvfplanet.com.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">2. Information We Collect</h2>
              <p className="text-lg mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the site includes:
              </p>
              <ul className="text-lg mb-6 space-y-2 ml-6">
                <li><strong>Personal Data:</strong> Name, email address, phone number (voluntarily provided)</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, referral sources</li>
                <li><strong>Device Data:</strong> Browser type, IP address, device type</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12">3. How We Use Your Information</h2>
              <p className="text-lg mb-4">
                We use the information we collect for various purposes:
              </p>
              <ul className="text-lg mb-6 space-y-2 ml-6">
                <li>To provide and maintain our website</li>
                <li>To respond to inquiries and communications</li>
                <li>To improve and optimize our website</li>
                <li>To analyze usage patterns and trends</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12">4. Disclosure of Your Information</h2>
              <p className="text-lg mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="text-lg mb-6 space-y-2 ml-6">
                <li>Our parent company, Texas Flange & Fitting Supply, for customer service purposes</li>
                <li>Service providers who assist us in operating our website</li>
                <li>Law enforcement when required by law</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12">5. Security of Your Information</h2>
              <p className="text-lg mb-4">
                We use appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">6. Cookies and Tracking</h2>
              <p className="text-lg mb-4">
                Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">7. Your Rights</h2>
              <p className="text-lg mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, contact us at sales@texasflange.com.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12">8. Contact Us</h2>
              <p className="text-lg mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="text-lg mb-6 space-y-2 ml-6">
                <li><strong>Email:</strong> sales@texasflange.com</li>
                <li><strong>Phone:</strong> 281-484-8325</li>
                <li><strong>Website:</strong> pvfplanet.com</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 mt-12">9. Changes to This Policy</h2>
              <p className="text-lg mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date of this Privacy Policy.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
