import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {

  const { keg, onClickingBuy, onClickingDelete } = props;

  const styledKegDetail = {
    fontFamily: 'Comic Sans MS, Comic Sans, cursive',
    color: '#5D2A42'
  }

  function pintsAvailableInStock(quantity) {
    return quantity > 0 ? <button className="add-buy-button" onClick={()=> onClickingBuy(keg.id)} type="submit">Buy Pint</button> : <p>Out of Stock</p>
  }

  return (
    <div style={styledKegDetail}>
      <h1>Keg Detail</h1>
      <h3>Kombucha name: {keg.name}</h3>
      <h3>Made by: {keg.brand}</h3>
      <h3>Price: ${keg.price}</h3>
      <h3>Flavor: {keg.flavor}</h3>
      <h3>Pints in keg: {keg.pintCount}</h3>
      {pintsAvailableInStock(keg.pintCount)}
      <button onClick={()=> onClickingDelete(keg.id)}>Delete Keg</button>
      <hr />
    </div>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingBuy: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetail;
