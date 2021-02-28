import { v4 as uuidv4 } from 'uuid';

const initialState = {
  cart_products: [],
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (state.cart_products.length >= 10) {
        // eslint-disable-next-line no-alert
        alert('Maximum amount of products in cart is 10');
        return { ...state };
      }
      return { ...state, cart_products: [...state.cart_products, action.data] };

    case 'REMOVE_ITEM':
      return {
        ...state,
        cart_products: state.cart_products.filter(
          (product) => product.product_id !== action.data,
        ),
      };
    default:
      return state;
  }
};

export const newCartItem = (orderItem) => ({
  type: 'ADD_ITEM',
  data: {
    product_id: uuidv4(),
    name: orderItem.product_name,
    picture_key: orderItem.picture_key,
  },
});

export const removeCartItem = (id) => ({
  type: 'REMOVE_ITEM',
  data: id,
});

export default shoppingCartReducer;
