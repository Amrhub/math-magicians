import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Calculator from '../Calculator';
import CalculatorKeypadRow from '../CalculatorKeypadRow';

const callCalculate = jest.fn(); // create a mock function

describe('Calculator', () => {
  it('Calculator component renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('CalculatorKeypadRow renders correctly', () => {
    const tree = renderer
      .create(
        <CalculatorKeypadRow
          values={['AC', '+/-', '%', '÷']}
          callCalculate={callCalculate}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Calculator user interaction', () => {
  it('when user hits a "7" it renders "7"', () => {
    render(<Calculator />);

    userEvent.click(screen.getByText(/7/i));

    const display = screen.getByTestId('display');

    expect(display).toHaveTextContent(/7/i);
  });

  it('when user hits a "4" then hits "5" it renders "45"', () => {
    render(<Calculator />);

    userEvent.click(screen.getByText(/4/i));
    userEvent.click(screen.getByText(/5/i));

    const display = screen.getByTestId('display');

    expect(display).toHaveTextContent(/45/i);
  });

  it('when user hits a "4" then hits "+" then hits "5" then hits "=" it renders "9"', () => {
    render(<Calculator />);

    userEvent.click(screen.getByText(/4/i));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText(/5/i));
    userEvent.click(screen.getByText('='));

    const display = screen.getByTestId('display');

    expect(display).toHaveTextContent(/9/i);
  });
});
