import React from 'react';
import Keg from './Keg';

const masterKegList = [
  {
    name: 'Kombucha',
    brand: 'Brew Dr.',
    price: 3,
    flavor: "mint",
    quantity: 5
  }
]

function KegList() {
  return (
    <React.Fragment>
      <hr />
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
        brand={keg.brand}
        price={keg.price}
        flavor={keg.flavor}
        quantity={keg.quantity}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default KegList;
