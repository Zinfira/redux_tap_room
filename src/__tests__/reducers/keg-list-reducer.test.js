import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from './../../actions/ActionTypes';

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

  const currentState = {
    1: {name: 'Kombucha',
    brand: 'Brew Ms',
    price: 4,
    flavor: 'Blueberry',
    pintCount: 124,
    id: 1 },
    2: {name: 'Bucha',
    brand: 'Ducha',
    price: 3,
    flavor: 'Guava',
    pintCount: 124,
    id: 2 }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg to masterKegList', () => {
    const { name, brand, price, flavor, id } = kegData;
    action = {
      type: c.ADD_KEG,
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

  test('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {name: 'Bucha',
      brand: 'Ducha',
      price: 3,
      flavor: 'Guava',
      pintCount: 124,
      id: 2 }
    });
  });

  test('Should successfully decrease pintCount by 1', () => {
    action = {
      type: c.BUY_KEG,
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      1: {name: 'Kombucha',
        brand: 'Brew Ms',
        price: 4,
        flavor: 'Blueberry',
        pintCount: 123,
        id: 1 },
      2: {name: 'Bucha',
        brand: 'Ducha',
        price: 3,
        flavor: 'Guava',
        pintCount: 124,
        id: 2 }
    });
  });
});