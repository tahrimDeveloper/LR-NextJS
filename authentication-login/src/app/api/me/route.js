import { NextResponse } from 'next/server';
import { auth } from 'app/auth';

import { getUserByEmail } from '../../../queries/users';
import { dbConnect } from 'lib/mongo';

export const GET = async request => {
  const session = await auth();

  if (!session?.user) {
    return new NextResponse('you are not Authenticated!', {
      status: 401,
    });
  }

  await dbConnect();

  try {
    const user = await getUserByEmail(session?.user?.email);

    return new NextResponse(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
