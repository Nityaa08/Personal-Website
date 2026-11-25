import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// The page renders, and the sections a visitor scrolls to are there.
test('renders the portfolio sections', () => {
  render(<App />);
  expect(screen.getAllByText(/Nityashree/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: /^Projects$/ })).toBeInTheDocument();
});

test('every project links to its code', () => {
  render(<App />);
  const links = screen.getAllByRole('link', { name: /GitHub/i });
  expect(links.length).toBeGreaterThan(0);
  links.forEach((a) => expect(a).toHaveAttribute('href', expect.stringMatching(/^https:\/\//)));
});

test('projects with a live demo link to it', () => {
  render(<App />);
  const demos = screen.getAllByRole('link', { name: 'Live demo' }).map((a) => a.getAttribute('href'));
  expect(demos).toEqual(expect.arrayContaining([
    'https://invoice.nityashree.in', 'https://router.nityashree.in', 'https://meridian.nityashree.in',
    'https://fees.nityashree.in', 'https://fraud.nityashree.in',
  ]));
});
