import ogImageSrc from "@images/social.webp";

export const SITE = {
  title: "Light Webx",
  tagline: "Top-quality software for your every need.",
  description:
    "Light Webx is a leading software company that specializes in developing high-performance, scalable, and user-centric software solutions tailored to meet the needs of businesses across various industries. Discover our range of services and innovative products that drive success.",
  description_short:
    "Light Webx delivers innovative and scalable software solutions for businesses across all industries.",
  url: "https://lightwebx.com",
  author: "Bishal",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Top-quality software for your every need.`,
  description:
    "Light Webx is a leading software company that specializes in developing high-performance, scalable, and user-centric software solutions tailored to meet the needs of businesses across various industries. Discover our range of services and innovative products that drive success.",
  image: ogImageSrc,
};
