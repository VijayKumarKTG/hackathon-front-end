import Navigation from '@/components/navigation';
import './globals.css';
import { DM_Sans } from 'next/font/google';
import Footer from '@/components/footer';

const dm_sans = DM_Sans({ weight: ['400', '500', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'Web3dApp',
  description: 'The ultimate place to solve your development problems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={dm_sans.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
