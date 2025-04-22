// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/products" },
  { name: "Services", url: "/service-plans" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Our Products",
    links: [
      { name: "2QuickPaper", url: "https://www.2quickpaper.com/home" },
      { name: "Software Guides", url: "https://www.softwareguide.dev/" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "Blog", url: "/blog" },
      { name: "Services", url: "/services" },
    ],
  },
  {
    section: "Reach Us",
    links: [
      {
        name: "+975-17959259",
        url: "https://api.whatsapp.com/send?phone=17959259",
      },
      { name: "contact@lightwebx.com", url: "mailto:contact@lightwebx.com" },
      {
        name: "YDF, Thimphu, Bhutan",
        url: "https://maps.app.goo.gl/NfsQRVcuRcMqQtV26",
      },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/lightwebx",
  x: "https://x.com/pragmaticcoder1",
  github: "https://github.com/bishal-dd",
  linkedin: "https://www.linkedin.com/company/light-webx/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
