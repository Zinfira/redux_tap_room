import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {

  const styledKegList = {
    fontFamily: 'Comic Sans MS, Comic Sans, cursive',
    color: '#5D2A42'
  }

  return (
    <div style={styledKegList}>
      <hr />
      {Object.values(props.kegList).map((keg) => {
        return <Keg
          whenKegClicked = { props.onKegSelection } 
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          flavor={keg.flavor}
          pintCount={keg.pintCount}
          id={keg.id}
          key={keg.id} />
      })}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;
