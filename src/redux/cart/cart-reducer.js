import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM } from './cart-actions';
import { addItemToCart, removeItemsToCart } from './cart-utils';

const INITAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemsToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
