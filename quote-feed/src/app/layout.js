import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/component/Header';
import Footer from '@/component/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Quote Feed TD',
  description: 'Random quote are here',
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col h-screen">
          <Header />
          {children}
          <Footer />
        </div>
        {modal}
        <div id="modal-root-id" />
      </body>
    </html>
  );
}
