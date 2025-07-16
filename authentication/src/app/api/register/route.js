import { NextResponse } from 'next/server';
import { createUser } from 'queries/users';
import bcrypt from 'bcryptjs';
import { dbConnect } from 'lib/mongo';

export const POST = async request => {
  const { name, email, password } = await request.json();

  // console.log(name, email, password);

  // create a DB(dataBase) Connection
  await dbConnect();

  // Encrypt the password
  const hashedPassword = await bcrypt.hash(password, 5);

  // From a DB payload
  const newUser = {
    name,
    password: hashedPassword,
    email,
  };
  // update the DB
  try {
    await createUser(newUser);
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }

  return new NextResponse('User has been created', {
    status: 201,
  });
};
