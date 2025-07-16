import Image from 'next/image';
import { CircleUserRound } from 'lucide-react';
import Logout from '../../components/Logout';
import { auth } from '../auth';
import Link from 'next/link';

import { redirect } from 'next/navigation';

async function Dashboard() {
  const session = await auth();

  if (!session?.user) redirect('/');

  return (
    <div className="flex flex-col items-center m-4">
      {session?.user?.name && session?.user?.image ? (
        <>
          <h1 className="text-3xl my-2">
            Welcome, {session?.user?.name} to Dashboard
          </h1>
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={72}
            height={72}
            className="rounded-full mb-3"
          />
        </>
      ) : (
        <>
          <h1 className="text-3xl my-2">
            Welcome, {session?.user?.name} to Dashboard
          </h1>
          <CircleUserRound size={25} color="white" />
          <Link
            href="/api/me"
            className="rounded-md m-10 bg-green-600 p-2 hover:bg-amber-800">
            My Information
          </Link>
        </>
      )}
      <Logout />
    </div>
  );
}
export default Dashboard;
