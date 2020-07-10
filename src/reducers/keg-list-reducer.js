import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, flavor, pintCount, id } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          flavor: flavor,
          pintCount: pintCount,
          id: id
        }
      });
    case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;
    case c.BUY_KEG:
      const pintCountAfterSale = state[id].pintCount - 1;
      const afterBuyingPint = { ...state, [id]: { ...state[id], pintCount: pintCountAfterSale}};
      return afterBuyingPint;
  default:
    return state;
  }
};