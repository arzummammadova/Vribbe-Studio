import SiteInteractions from '../components/SiteInteractions';
import LanguageProvider from '../components/LanguageProvider';

export const metadata = {
  title: 'VRIBBE Studio',
  description: 'Website and mobile app development, UI/UX design, branding, SEO, AI chatbots, automation and data analytics by VRIBBE Studio.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/studio.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <SiteInteractions />
        </LanguageProvider>
      </body>
    </html>
  );
}
