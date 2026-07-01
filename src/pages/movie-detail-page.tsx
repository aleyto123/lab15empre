import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import PageContainer from "@/components/layout/page-container";
import type { Movie } from "@/types/movie";
import { getMovieById } from "@/services/tmdb";
import { useMovieStore } from "@/store/movie-store";

export function MovieDetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const openCheckout = useMovieStore((state) => state.openCheckout);
  const isPurchased = useMovieStore((state) => state.isPurchased(movie?.id ?? ""));

  useEffect(() => {
    const loadMovie = async () => {
      if (!movieId) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      const movieData = await getMovieById(movieId);
      setMovie(movieData);
      setIsLoading(false);
    };

    loadMovie();
  }, [movieId]);

  if (isLoading) {
    return (
      <PageContainer>
        <p className="py-10 text-sm text-muted-foreground">Loading movie details...</p>
      </PageContainer>
    );
  }

  if (!movie) {
    return (
      <PageContainer>
        <div className="space-y-4 py-10">
          <h1 className="text-3xl font-bold">Movie not found</h1>
          <p className="text-muted-foreground">We could not find the movie you requested.</p>
          <Link to="/movies" className="text-sm font-medium text-blue-600 hover:underline">
            Back to movies
          </Link>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="grid gap-8 py-8 md:grid-cols-[280px_1fr]">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="aspect-2/3 w-full rounded-lg object-cover"
        />

        <div className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{movie.title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {movie.releaseDate ? `Release date: ${movie.releaseDate}` : "Release date unavailable"}
            </p>
            <p className="text-sm text-muted-foreground">
              {movie.voteAverage ? `Rating: ${movie.voteAverage.toFixed(1)} / 10` : "Rating unavailable"}
            </p>
          </div>

          <p className="max-w-2xl text-base leading-7 text-muted-foreground">{movie.synopsis}</p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              type="button"
              variant={isPurchased ? "secondary" : "default"}
              onClick={() => openCheckout(movie)}
            >
              {isPurchased ? "Purchased" : "Simulate purchase"}
            </Button>

            <Link to="/movies" className="inline-flex text-sm font-medium text-blue-600 hover:underline">
              ← Back to movies
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
