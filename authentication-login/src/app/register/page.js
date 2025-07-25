import React from 'react';
import RegisterFrom from 'components/RegisterFrom';

import Link from 'next/link';

function RegisterPage() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="text-3xl mb-0">Create an account here!</h1>
      <RegisterFrom />
      <p className="my-3">
        Already have an account?
        <Link href="/login" className="mx-2 underline text-blue-600">
          Login
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;
