import { Inter } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bissas Dhol Books',
  description: 'Bissas dhol books',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />

        <div className="border-t-2 border-amber-300 my-3">
          <h4 className="text-center text-gray-400 mt-1 font-extralight">
            Bissas Dhol Books &copy; {new Date().getFullYear()}
          </h4>
        </div>
      </body>
    </html>
  );
}
