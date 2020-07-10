import * as actions from './../../actions';

describe('tap room actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'Kombucha', brand: 'Bucha', price: 3, flavor: 'Blueberry', pintCount: 124, id: 1})).toEqual({
      type: 'ADD_KEG',
      name: 'Kombucha',
      brand: 'Bucha',
      price: 3,
      flavor: 'Blueberry',
      pintCount: 124,
      id: 1
    });
  });

  it('buyKeg should create BUY_KEG action', () => {
    expect(actions.buyKeg({name: 'Kombucha', brand: 'Bucha', price: 3, flavor: 'Blueberry', pintCount: 124, id: 1})).toEqual({
      type: 'BUY_KEG',
      name: 'Kombucha',
      brand: 'Bucha',
      price: 3,
      flavor: 'Blueberry',
      pintCount: 123,
      id: 1
    });
  });
});