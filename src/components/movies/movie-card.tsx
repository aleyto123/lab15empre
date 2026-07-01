import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import type { Movie } from "@/types/movie";
import { useMovieStore } from "@/store/movie-store";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const openCheckout = useMovieStore((state) => state.openCheckout);
  const isPurchased = useMovieStore((state) => state.isPurchased(movie.id));

  return (
    <article>
      <Card className="overflow-hidden">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="aspect-2/3 w-full object-cover"
        />

        <CardHeader>
          <CardTitle>
            {movie.title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="mb-2 text-sm text-muted-foreground">
            {movie.releaseDate ? `Release: ${movie.releaseDate}` : "Release date unavailable"}
          </p>
          <p className="mb-2 text-sm text-muted-foreground">
            {movie.voteAverage ? `Rating: ${movie.voteAverage.toFixed(1)} / 10` : "Rating unavailable"}
          </p>
          <p className="mb-4 text-sm text-muted-foreground">
            {movie.synopsis}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant={isPurchased ? "secondary" : "default"}
              size="sm"
              onClick={() => openCheckout(movie)}
            >
              {isPurchased ? "Purchased" : "Buy for $9.99"}
            </Button>

            <Link
              to={`/movies/${movie.id}`}
              className="
                text-sm
                font-medium
                text-blue-600
                hover:underline
              "
            >
              View details
            </Link>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default MovieCard;
