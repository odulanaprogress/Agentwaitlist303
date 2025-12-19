// src/utils/serverConfig.ts

export const fetchServer = async (url: string, options?: RequestInit) => {
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const response = await fetch(`${baseUrl}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error('Server request failed');
  }

  return response.json();
};

