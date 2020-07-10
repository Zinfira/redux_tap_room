import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('tap room actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'Kombucha', brand: 'Bucha', price: 3, flavor: 'Blueberry', pintCount: 124, id: 1})).toEqual({
      type: c.ADD_KEG,
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
      type: c.BUY_KEG,
      name: 'Kombucha',
      brand: 'Bucha',
      price: 3,
      flavor: 'Blueberry',
      pintCount: 123,
      id: 1
    });
  });
});