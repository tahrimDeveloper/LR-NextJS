import Image from 'next/image';
import Link from 'next/link';
import bgImage from '../../public/bg.jpg';
import { SparklesIcon } from '@heroicons/react/24/solid';

// import logo from '../../public/Bissas.png';
// <div>
//           <Image src={logo} alt="logo bissas dhol" />
//         </div>

export default function Home() {
  return (
    <div className="flex flex-col relative justify-center items-center h-screen">
      <Image
        className="blur-xs"
        src={bgImage}
        alt="A lot of books"
        fill
        size="100vw"
        style={{ objectFit: 'cover' }}
      />
      <div className="flex flex-col justify-center items-center bg-white rounded-md p-2 lg:w-2/5 h-1/4 z-10">
        <div className="flex pb-5 mb-5 text-5xl text-green-700">
          <SparklesIcon className="mr-2 w-12 h-12 text-purple-700" />
          <p>BissasDhol Books</p>
        </div>
        <div>
          <Link
            className="bg-green-700 text-white rounded-sm p-2"
            href="/store">
            Take me to the Store
          </Link>
        </div>
      </div>
    </div>
  );
}
