import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Image from 'next/image';

async function HomePage() {
  const session = await auth();
  if (!session?.user) redirect('/');
  return (
    <div className="flex flex-col items-center m-4 justify-center">
      <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        width={72}
        height={72}
        className="rounded-full"
      />
      <h1 className="text-3xl my-2">{session?.user?.name}</h1>
    </div>
  );
}

export default HomePage;
