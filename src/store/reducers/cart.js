export const cartReducer = (cartState = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const {id} = action.payload
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] + 1 : 1,
      }
    }

    case 'REMOVE_FROM_CART': {
      const {id} = action.payload
      if (!cartState[id]) return cartState
      if (cartState[id] === 1) {
        delete cartState[id]
        return cartState
      }
      return {
        ...cartState,
        [id]: cartState[id] - 1,
      }
    }

    default:
      return cartState
  }
}
