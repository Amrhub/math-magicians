import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class KeypadRow extends React.Component {
  constructor(props) {
    super(props);
    this.ClickHandler = this.clickHandler.bind(this);
  }

  clickHandler = (e) => {
    const ButtonName = e.target.innerText;
    const { callCalculate } = this.props;
    callCalculate(ButtonName);
  };

  render() {
    const { values } = this.props;

    return (
      <div className="calculator__keypad-row">
        {values.map((value) => (
          <button
            className="calculator__keypad-key flex-center-center"
            type="button"
            key={value}
            onClick={this.clickHandler}
          >
            {value}
          </button>
        ))}
      </div>
    );
  }
}

KeypadRow.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  callCalculate: PropTypes.func.isRequired,
};
