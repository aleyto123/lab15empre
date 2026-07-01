import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import MovieCard from './movie-card';
import { PaymentModal } from './payment-modal';

describe('MovieCard', () => {
  it('renders the movie title and allows opening the checkout', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <>
          <MovieCard
            movie={{
              id: '10',
              title: 'Inception',
              posterUrl: 'https://example.com/poster.jpg',
              synopsis: 'A mind-bending thriller.',
            }}
          />
          <PaymentModal />
        </>
      </MemoryRouter>
    );

    expect(screen.getByText('Inception')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /buy for/i }));

    expect(screen.getByText('Simulated checkout')).toBeInTheDocument();
  });
});
