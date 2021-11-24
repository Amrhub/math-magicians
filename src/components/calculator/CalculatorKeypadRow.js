import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class KeypadRow extends React.Component {
  render() {
    const { values } = this.props;
    return (
      <div className="calculator__keypad-row">
        {values.map((value) => (
          <button
            className="calculator__keypad-key flex-center-center"
            type="button"
            key={value}
          >
            {value}
          </button>
        ))}
      </div>
    );
  }
}

// eslint-disable-next-line react/forbid-prop-types
KeypadRow.propTypes = { values: PropTypes.array.isRequired };
