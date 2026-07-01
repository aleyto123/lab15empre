import { Link } from "react-router-dom";

import PageContainer from "@/components/layout/page-container";

export function NotFoundPage() {
  return (
    <PageContainer>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex text-sm font-medium text-blue-600 hover:underline"
        >
          Go back home
        </Link>
      </div>
    </PageContainer>
  );
}
