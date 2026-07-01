import { useEffect, useState } from "react";

import type { Movie } from "@/types/movie";
import { getPopularMovies } from "@/services/tmdb";

import MovieCard from "./movie-card";

interface Props {
  title?: string;
  description?: string;
}

const MoviesGrid = ({
  title = "Featured Movies",
  description = "Most popular releases right now.",
}: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
      setIsLoading(false);
    };

    loadMovies();
  }, []);

  return (
    <section className="py-4">
      <header className="mb-8">
        <h2 className="text-3xl font-bold">{title}</h2>

        <p className="mt-2 text-muted-foreground">{description}</p>
      </header>

      {isLoading ? (
        <p className="text-sm text-muted-foreground">Loading movies...</p>
      ) : (
        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MoviesGrid;
