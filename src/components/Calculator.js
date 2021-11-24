import React from 'react';
import './calculator.scss';
import KeypadRow from './CalculatorKeypadRow';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0 };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calculator flex-col-center">
        <div className="calculator__display">{result}</div>
        <div className="calculator__keypad">
          <KeypadRow values={['AC', '+/-', '%', '÷']} />
          <KeypadRow values={['7', '8', '9', 'x']} />
          <KeypadRow values={['4', '5', '6', '-']} />
          <KeypadRow values={['1', '2', '3', '+']} />
          <KeypadRow values={['0', '.', '=']} />
        </div>
      </div>
    );
  }
}
