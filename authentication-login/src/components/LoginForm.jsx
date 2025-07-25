'use client';

import SocialLogins from './SocialLogins';

import { doCredentialLogin } from '../app/actions';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const response = await doCredentialLogin(formData);

      if (!!response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        router.push('/products');
      }
    } catch (e) {
      console.error(e);
      setError('Check your Credentials');
    }
  }

  return (
    <>
      <div className="text-xl text-red-500">{error}</div>
      <form
        className="flex flex-col items-center justify-center m-7 p-7 border rounded-md border-gray-500 gap-3 shadow-2xl shadow-amber-400"
        onSubmit={onSubmit}>
        <div className="my-2">
          <label htmlFor="email">YourEmail:</label>
          <input
            className="border mx-2 p-1 border-gray-500 rounded"
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div className="my-2">
          <label htmlFor="password">Password:</label>
          <input
            className="border mx-2 p-1 border-gray-500 rounded"
            type="password"
            name="password"
            id="password"
          />
        </div>

        <button type="submit" className="bg-green-500 mt-4 rounded w-36">
          Ceredential Login
        </button>
      </form>
      <SocialLogins />
    </>
  );
};

export default LoginForm;
