import React from 'react';
import './calculator.scss';
import KeypadRow from './CalculatorKeypadRow';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
    this.callCalculate = this.callCalculate.bind(this);
  }

  callCalculate(value) {
    const newState = calculate(this.state, value);
    this.setState(newState);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator flex-col-center">
        <div className="calculator__display">
          {operation == null
            ? total || next || '0'
            : `${total} ${operation} ${next == null ? ' ' : next}`}
        </div>
        <div className="calculator__keypad">
          <KeypadRow
            values={['AC', '+/-', '%', '÷']}
            callCalculate={this.callCalculate}
          />
          <KeypadRow
            values={['7', '8', '9', 'x']}
            callCalculate={this.callCalculate}
          />
          <KeypadRow
            values={['4', '5', '6', '-']}
            callCalculate={this.callCalculate}
          />
          <KeypadRow
            values={['1', '2', '3', '+']}
            callCalculate={this.callCalculate}
          />
          <KeypadRow
            values={['0', '.', '=']}
            callCalculate={this.callCalculate}
          />
        </div>
      </div>
    );
  }
}
