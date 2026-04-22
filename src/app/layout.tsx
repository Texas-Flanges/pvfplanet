import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "PVF Planet",
  description: "Your PVF Industry Resource Hub. Trusted insights for engineers, buyers, and technicians navigating the industrial PVF landscape.",
  metadataBase: new URL("https://pvfplanet.com"),
  openGraph: {
    type: "website",
    siteName: "PVF Planet",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          /* Design B — Clean Steel */
          * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }

          body {
            background: #ffffff;
            color: #0c1829;
            margin: 0;
            padding: 0;
          }

          h1, h2, h3, h4, h5, h6 {
            color: #0c1829;
          }

          /* CTA Buttons */
          .btn-primary {
            background-color: #e8590c !important;
            color: #ffffff !important;
            border: none;
            transition: background-color 0.2s ease;
          }

          .btn-primary:hover {
            background-color: #d64a05 !important;
          }

          a:not(.btn-primary) {
            color: #0c1829;
          }

          nav {
            background-color: #0c1829 !important;
          }

          footer {
            background-color: #0c1829 !important;
          }
        `}</style>
      </head>
      <body>
        <GoogleAnalytics />{children}</body>
    </html>
  );
}
