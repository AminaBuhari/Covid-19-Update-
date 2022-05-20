import React from 'react';
import PropTypes from 'prop-types';

function Region(props) {
  const { name, confirmedCases } = props;

  return (
    <div className="region">
      <h11 className="h11">{name}</h11>
      <h12 className="h12">
        {confirmedCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        {' '}
        Cases
      </h12>
    </div>
  );
}

Region.propTypes = {
  name: PropTypes.string.isRequired,
  confirmedCases: PropTypes.number.isRequired,
};

export default Region;
