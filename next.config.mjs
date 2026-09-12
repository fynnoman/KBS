/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" }
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" }
        ]
      },
      {
        source: "/:all*(jpg|jpeg|png|webp|avif|svg|ico|gif|woff|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
        ]
      }
    ];
  },
  async redirects() {
    return [
      { source: "/business", destination: "/", permanent: true },
      { source: "/business/:path*", destination: "/", permanent: true },
      { source: "/leistungen", destination: "/softwareloesungen", permanent: true },
      { source: "/leistungen/:slug", destination: "/softwareloesungen", permanent: true },
      { source: "/ki-potenzial-check", destination: "/kontakt", permanent: true },
      { source: "/kontaktformular", destination: "/kontakt", permanent: true },
      { source: "/ki-im-vertrieb", destination: "/ki-anwendungsfaelle/vertrieb", permanent: true },
      { source: "/ki-im-marketing", destination: "/ki-anwendungsfaelle/marketing", permanent: true },
      { source: "/ki-in-der-buchhaltung", destination: "/ki-anwendungsfaelle/buchhaltung", permanent: true },
      { source: "/ki-im-kundenservice", destination: "/ki-anwendungsfaelle/kundenservice", permanent: true },
      { source: "/ki-im-hr", destination: "/ki-anwendungsfaelle/hr", permanent: true },
      { source: "/branchen/vereine", destination: "/branchen", permanent: true },
      { source: "/branchen/einzelhandel", destination: "/branchen", permanent: true },
      { source: "/branchen/gastronomie", destination: "/branchen", permanent: true }
    ];
  }
};

export default nextConfig;
