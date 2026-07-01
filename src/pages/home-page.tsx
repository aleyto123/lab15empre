import { Link } from "react-router-dom";

import HeroSection from "@/components/home/hero-section";
import PageContainer from "@/components/layout/page-container";
import MoviesGrid from "@/components/movies/movies-grid";

const HomePage = () => {
  return (
    <>
      <PageContainer>
        <HeroSection />
      </PageContainer>

      <PageContainer>
        <section className="grid gap-6 py-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
              Discover and buy
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Explore your next favorite movie in one place
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Browse popular releases from TMDB, open the details page and simulate a purchase with a single click.
            </p>
            <Link
              to="/movies"
              className="mt-6 inline-flex text-sm font-medium text-blue-600 hover:underline"
            >
              Browse all movies →
            </Link>
          </div>

          <div className="rounded-2xl border bg-slate-950 p-6 text-white shadow-sm">
            <h3 className="text-lg font-semibold">What you can do</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• See the latest popular movies from TMDB</li>
              <li>• Read synopsis, rating and release date</li>
              <li>• Simulate a purchase from any movie card</li>
            </ul>
          </div>
        </section>
      </PageContainer>

      <PageContainer>
        <MoviesGrid />
      </PageContainer>
    </>
  );
};

export default HomePage;
