'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    console.error('Error caught by error.js:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Something went wrong!
      </h1>
      <p className="text-gray-700 mb-6">
        {error?.message || 'An unexpected error occurred.'}
      </p>
      <div className="flex gap-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => reset()}>
          Try Again
        </button>
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={() => router.push('/')}>
          Go Home
        </button>
      </div>
    </div>
  );
}
