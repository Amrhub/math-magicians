import React from 'react';
import PropTypes from 'prop-types';

const KeypadRow = (props) => {
  const { values } = props;
  const { callCalculate } = props;

  const clickHandler = (e) => {
    const ButtonName = e.target.innerText;
    callCalculate(ButtonName);
  };
  return (
    <div className="calculator__keypad-row">
      {values.map((value) => (
        <button
          className="calculator__keypad-key flex-center-center number-font-family"
          type="button"
          key={value}
          onClick={clickHandler}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

KeypadRow.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  callCalculate: PropTypes.func.isRequired,
};

export default KeypadRow;
