import * as c from './ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { name, brand, price, flavor, pintCount,  id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    pintCount: 124,
    id: id
  }
}

export const buyKeg = id => ({
  type: c.BUY_KEG,
  id
})