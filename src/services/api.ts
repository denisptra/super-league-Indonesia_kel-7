// src/services/api.ts
const API_BASE = "http://localhost:3000/api";

export async function getUsers() {
  const response = await fetch(`${API_BASE}/users`);
  return response.json();
}

export async function getNews() {
  const response = await fetch(`${API_BASE}/news`);
  return response.json();
}
