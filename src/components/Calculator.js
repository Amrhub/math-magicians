import React, { useState } from 'react';
import './calculator.scss';
import KeypadRow from './CalculatorKeypadRow';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const { total, next, operation } = state;

  const callCalculate = (value) => {
    const newState = calculate(state, value);
    setState(newState);
  };

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
          callCalculate={callCalculate}
        />
        <KeypadRow
          values={['7', '8', '9', 'x']}
          callCalculate={callCalculate}
        />
        <KeypadRow
          values={['4', '5', '6', '-']}
          callCalculate={callCalculate}
        />
        <KeypadRow
          values={['1', '2', '3', '+']}
          callCalculate={callCalculate}
        />
        <KeypadRow values={['0', '.', '=']} callCalculate={callCalculate} />
      </div>
    </div>
  );
};

export default Calculator;
