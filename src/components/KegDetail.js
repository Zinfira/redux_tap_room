import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {

  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>Kombucha name: {keg.name}</h3>
      <h3>Made by:{keg.brand}</h3>
      <h3>Price: {keg.price}</h3>
      <h3>Flavor: {keg.flavor}</h3>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;
