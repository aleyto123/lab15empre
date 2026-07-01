import { movies as fallbackMovies } from '@/data/movies';
import { httpClient } from '@/services/http-client';
import type { Movie } from '@/types/movie';

type TmdbMovie = {
  id: number;
  title?: string;
  name?: string;
  overview?: string;
  poster_path?: string | null;
  release_date?: string;
  vote_average?: number;
};

type TmdbListResponse = {
  results: TmdbMovie[];
};

const buildPosterUrl = (posterPath?: string | null) => {
  if (!posterPath) {
    return 'https://placehold.co/500x750?text=No+Poster';
  }

  return `https://image.tmdb.org/t/p/w500${posterPath}`;
};

const mapMovie = (movie: TmdbMovie): Movie => ({
  id: String(movie.id),
  title: movie.title ?? movie.name ?? 'Untitled movie',
  posterUrl: buildPosterUrl(movie.poster_path),
  synopsis: movie.overview ?? 'No synopsis available.',
  releaseDate: movie.release_date,
  voteAverage: movie.vote_average,
});

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const { data } = await httpClient.get<TmdbListResponse>('/movie/popular', {
      params: {
        language: 'es-ES',
        page: 1,
      },
    });

    return data.results.map(mapMovie);
  } catch (error) {
    console.error('Error fetching popular movies from TMDB:', error);
    return fallbackMovies;
  }
};

export const getMovieById = async (movieId: string): Promise<Movie | null> => {
  try {
    const { data } = await httpClient.get<TmdbMovie>(`/movie/${movieId}`, {
      params: {
        language: 'es-ES',
      },
    });

    return mapMovie(data);
  } catch (error) {
    console.error(`Error fetching movie ${movieId} from TMDB:`, error);
    return fallbackMovies.find((movie) => movie.id === movieId) ?? null;
  }
};
