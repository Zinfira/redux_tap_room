export default (state = {}, action) => {
  const { name, brand, price, flavor, pintCount, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
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
  default:
    return state;
  }
};