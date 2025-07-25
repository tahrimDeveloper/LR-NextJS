'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import SocialLogins from './SocialLogins';

function RegisterFrom() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const name = formData.get('name');
      const email = formData.get('email');
      const password = formData.get('password');

      const response = await fetch(`/api/register`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      response.status === 201 && router.push('/');
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  justify-center m-7 p-7 border rounded-md border-gray-500 gap-3 shadow-2xl shadow-amber-400">
        <div className="my-2">
          <label htmlFor="name">Name:</label>
          <input
            className="border mx-2 p-1 border-gray-500 rounded"
            type="text"
            name="name"
            id="name"
          />
        </div>
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

        <button
          type="submit"
          className="bg-green-500 mt-4 rounded flex justify-center items-center w-36">
          Register
        </button>
      </form>
      <SocialLogins />
    </div>
  );
}

export default RegisterFrom;
