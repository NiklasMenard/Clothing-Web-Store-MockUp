import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductListItems from '../components/productListItems';
import { removeCartItem } from '../reducers/shoppinCartReducer';

const ShoppingCartView = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.shoppingCart.cart_products);

  const removeProductFromCart = (product) => {
    dispatch(removeCartItem(product.product_id));
  };

  return (
    <ShoppingCartViewContainer>
      <h1>Products in Shopping Cart</h1>
      <Link to="/">
        <button type="button">
          Go back to shopping
        </button>
      </Link>
      <ProductListItems
        productsToShow={productsInCart}
        clickEvent={removeProductFromCart}
        buttonName="Remove from Cart"
      />
    </ShoppingCartViewContainer>
  );
};

export default ShoppingCartView;

const ShoppingCartViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  height: 100vh;
  overflow-y: auto;
  h1, a {
    align-self:center;
    margin: 1rem;
  }
`;
