import React from 'react';
import PropTypes from 'prop-types';

const MaskedString = ({ inputString }) => {
  // Function to mask the string
  const maskString = (str) => {
    if (str.length <= 4) {
      return str; // If the string is 4 characters or less, no need to mask
    }
    const visiblePart = str.slice(-4); // Last 4 characters
    const maskedPart = '*'.repeat(str.length - 4); // Remaining characters masked with *
    return maskedPart + visiblePart;
  };

  return (
    <div>
      <p>{maskString(inputString)}</p>
    </div>
  );
};

MaskedString.propTypes = {
  inputString: PropTypes.string.isRequired,
};

export default MaskedString;
