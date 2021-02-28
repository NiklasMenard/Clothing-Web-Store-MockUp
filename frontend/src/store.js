import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import shoppingCartReducer from './reducers/shoppinCartReducer';
import productViewReducer from './reducers/productViewReducer';

const reducer = combineReducers({
  shoppingCart: shoppingCartReducer,
  productView: productViewReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
