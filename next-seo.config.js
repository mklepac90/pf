const title = 'Yesh Yendamuri';
const description = 'personal website of yesh yendamuri';
const SEO = {
  title,
  description,
  canonical: 'https://yeshyendamuri.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://yeshyendamuri.vercel.app/',
    title,
    description,
    images: [
      {
        url: 'https://yeshyendamuri.vercel.app/me.jpg',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};
export default SEO;
