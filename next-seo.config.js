const title = 'Yesh Yendamuri';
const description = 'personal website of yesh yendamuri';
const SEO = {
  title,
  description,
  canonical: 'https://yesh.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://yesh.vercel.app/',
    title,
    description,
    images: [
      {
        url: 'https://immigrant-handbook.vercel.app/toronto-skyline.jpg',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};
export default SEO;
