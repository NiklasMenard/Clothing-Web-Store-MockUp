import productService from '../services/productService';

const initialState = {
  category: { genderCategory: '', productCategory: '', featured: '' },
  newSearch: '',
  products: [],
};

const productViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return { ...state, category: action.data };

    case 'NEW_SEARCH':
      return { ...state, newSearch: action.data };

    case 'INIT_PRODUCTS':
      return { ...state, products: action.data };

    default:
      return state;
  }
};

export const categoryChange = (categoryObject) => ({
  type: 'CHANGE_CATEGORY',
  data: {
    genderCategory: categoryObject.genderCategory,
    productCategory: categoryObject.productCategory,
    featured: categoryObject.featured,
  },
});

export const newSearch = (search) => ({
  type: 'NEW_SEARCH',
  data: search,
});

export const initializeProducts = () => async (dispatch) => {
  const products = await productService.getAllProducts();
  dispatch({
    type: 'INIT_PRODUCTS',
    data: products,
  });
};

export default productViewReducer;
