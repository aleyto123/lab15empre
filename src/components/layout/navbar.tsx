import { Film, Menu, ShoppingBag } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMovieStore } from "@/store/movie-store";

const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Movies",
    href: "/movies",
  },
];

export function Navbar() {
  const purchasedMovies = useMovieStore((state) => state.purchasedMovies);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <Film className="h-5 w-5 text-blue-600" />

          <span className="text-lg">
            CineSpoilerS
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navigationItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
            >
              <NavLink to={item.href}>
                {item.label}
              </NavLink>
            </Button>
          ))}

          <div className="ml-2 flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700">
            <ShoppingBag className="h-4 w-4" />
            <span>{purchasedMovies.length} purchased</span>
          </div>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <div className="mt-8 flex flex-col gap-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.href}
                  asChild
                  variant="ghost"
                  className="justify-start"
                >
                  <NavLink to={item.href}>
                    {item.label}
                  </NavLink>
                </Button>
              ))}

              <div className="mt-2 flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-blue-700">
                <ShoppingBag className="h-4 w-4" />
                <span>{purchasedMovies.length} purchased</span>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
