import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ProductListItems from '../components/productListItems';
import { newCartItem } from '../reducers/shoppinCartReducer';
import { FilterProducts, generateProductTitleText } from '../utils/productFilter';

const ProductView = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.productView.category);
  const search = useSelector((state) => state.productView.newSearch);
  const products = useSelector((state) => state.productView.products);

  const addProductToCart = (product) => {
    const newOrder = { product_name: product.name, picture_key: product.picture_key };
    dispatch(newCartItem(newOrder));
  };

  const productsToShow = FilterProducts(search, products, category);
  return (
    <ProductViewContainer>
      <h1>{generateProductTitleText(search, category)}</h1>
      <ProductListItems
        productsToShow={productsToShow}
        clickEvent={addProductToCart}
        buttonName="Add to Shopping Cart"
      />
    </ProductViewContainer>
  );
};

const ProductViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  height: 85vh;
  overflow-y: auto;
  h1 {
    align-self:center;
  }
`;

export default ProductView;
