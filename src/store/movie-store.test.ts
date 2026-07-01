import { beforeEach, describe, expect, it } from 'vitest';

import { useMovieStore } from './movie-store';

describe('useMovieStore', () => {
  beforeEach(() => {
    useMovieStore.setState({
      purchasedMovies: [],
      checkoutMovie: null,
      paymentStatus: 'idle',
    });
  });

  it('adds a movie to purchased movies when payment completes', async () => {
    const movie = {
      id: '1',
      title: 'Interstellar',
      posterUrl: 'https://example.com/poster.jpg',
      synopsis: 'A journey beyond the stars.',
    };

    useMovieStore.getState().openCheckout(movie);
    await useMovieStore.getState().completePayment();

    expect(useMovieStore.getState().purchasedMovies).toHaveLength(1);
    expect(useMovieStore.getState().purchasedMovies[0].title).toBe('Interstellar');
    expect(useMovieStore.getState().paymentStatus).toBe('success');
  });

  it('does not duplicate a movie when purchased twice', async () => {
    const movie = {
      id: '2',
      title: 'Dune',
      posterUrl: 'https://example.com/poster.jpg',
      synopsis: 'The future of Arrakis.',
    };

    useMovieStore.getState().openCheckout(movie);
    await useMovieStore.getState().completePayment();
    await useMovieStore.getState().completePayment();

    expect(useMovieStore.getState().purchasedMovies).toHaveLength(1);
  });
});
