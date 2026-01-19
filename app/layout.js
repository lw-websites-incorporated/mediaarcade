import './globals.css';
import { Poppins, Playfair_Display_SC } from 'next/font/google';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import { siteConfig } from '@/config/siteConfig';

// Load Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-opensans',
});

// Load Playfair Display SC font
const playfair = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

export const metadata = siteConfig.metadata.base;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${poppins.variable}
          ${playfair.variable}
          font-sans
          antialiased
          bg-white
          text-[#111111]
        `}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
