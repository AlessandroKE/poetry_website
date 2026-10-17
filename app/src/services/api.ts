
export interface ApiResponse {
  message: string;
  status: string;
}

const API_URL = 'http://localhost:8000/api';

export async function testApiConnection(): Promise<ApiResponse> {
  const response = await fetch(`${API_URL}/hello`);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json() as Promise<ApiResponse>;
}
