import React from 'react';
import './Quote.scss';

const Quote = () => (
  <div className="quote flex-col-center">
    <p className="quote-text" data-testid="quote">
      Mathematics is not about numbers, equations, computations, or algorithms.
      It is about the way we think about numbers, equations, and the
      relationships between them.
    </p>
    <p className="quote-author">- Albert Einstein</p>
  </div>
);

export default Quote;
