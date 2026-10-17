
import { useEffect, useState } from 'react';
import { testApiConnection } from './services/api';
import type { ApiResponse } from './services/api';

export default function App() {
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    testApiConnection()
      .then((data) => {
        setApiResponse(data);
      })
      .catch((err: Error) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="min-h-screen bg-stone-100 p-8">
      <h1 className="text-3xl font-bold text-stone-900">
        Poetry Website
      </h1>

      {apiResponse && (
        <div className="mt-4 rounded-lg bg-white p-6 shadow">
          <p className="text-lg text-green-700">
            {apiResponse.message}
          </p>
          <p className="mt-2 text-sm text-stone-500">
            API status: {apiResponse.status}
          </p>
        </div>
      )}

      {!apiResponse && !error && (
        <p className="mt-4">Connecting to API...</p>
      )}

      {error && (
        <p className="mt-4 text-red-600">
          Connection error: {error}
        </p>
      )}
    </div>
  );
}
