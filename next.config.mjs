/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" }
    ]
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
