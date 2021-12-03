import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from './App';

describe('App user interaction tests', () => {
  it('Home button links correctly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByText('Home'));

    const heading = screen.getByText(/welcome to our page!/i);

    expect(heading).toBeInTheDocument();
  });

  it('Calculator button links correctly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByText('Calculator'));

    const heading = screen.getByText(/let's do some math!/i);

    expect(heading).toBeInTheDocument();
  });

  it('Quote button links correctly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByText('Quote'));

    const heading = screen.getByText(/Albert Einstein/i);

    expect(heading).toBeInTheDocument();
  });
});
