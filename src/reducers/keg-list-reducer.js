export default (state = {}, action) => {
  const { name, brand, price, flavor, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          flavor: flavor,
          id: id
        }
      });
  default:
    return state;
  }
};