import Image from 'next/image';
import RotateDiv from './_components/animate/rotate';
import Typewriter from './_components/TypeWritter';
import Marquee from './_components/Marquee';

export default function Home() {
  return (
    <>
      <Typewriter />
      <Marquee />
      <RotateDiv />
    </>
  );
}
