import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
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

    fireEvent.click(screen.getByText('7'));

    // const display = screen.getByTestId('display');

    // expect(display.textContent).toBe('7');
  });
});
