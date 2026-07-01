import axios from "axios";

const baseURL = import.meta.env.VITE_TMDB_API_URL ?? "https://api.themoviedb.org/3";
const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export const httpClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
  },
});
