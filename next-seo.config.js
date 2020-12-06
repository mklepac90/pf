const title = "Immigrant Handbook";
const description =
  "Your all in one guide to knowing the ins and outs of starting a new life in Canada.";
const SEO = {
  title,
  description,
  canonical: "https://immigrant-handbook.vercel.app/",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://immigrant-handbook.vercel.app/",
    title,
    description,
    images: [
      {
        url: "https://immigrant-handbook.vercel.app/toronto-skyline.jpg",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};
export default SEO;
