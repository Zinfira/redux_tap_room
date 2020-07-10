import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const kegData = {
    name: 'Kombucha',
    brand: 'Brew Ms',
    price: 4,
    flavor: 'Blueberry',
    pintCount: 124,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg to masterKegList', () => {
    const { name, brand, price, flavor, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      pintCount: 124,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        flavor: flavor,
        pintCount: 124,
        id: id
      }
    });
  });
});