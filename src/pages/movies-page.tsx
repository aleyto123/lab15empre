import PageContainer from "@/components/layout/page-container";
import MoviesGrid from "@/components/movies/movies-grid";

export function MoviesPage() {
  return (
    <PageContainer>
      <div className="space-y-6 py-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Movies</h1>
          <p className="mt-2 text-muted-foreground">
            Browse our latest popular movies powered by TMDB.
          </p>
        </div>

        <MoviesGrid
          title="Popular movies"
          description="Discover the most watched titles today."
        />
      </div>
    </PageContainer>
  );
}
