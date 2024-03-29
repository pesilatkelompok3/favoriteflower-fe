import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
 title: 'FavoriteFlower | Detail Product',
 description: 'Favorite Flower Website',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang='en'>
   <body className={inter.className}>
    <header className='sticky top-0 z-50'>
     <Navbar />
    </header>
    <main className='min-h-screen'>{children}</main>
    <footer>
     <TheFooter />
    </footer>
   </body>
  </html>
 );
}
