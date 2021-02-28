/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ProductItem from './productItem';

const ProductListItems = ({ productsToShow, clickEvent, buttonName }) => (

  <ListContainer>
    {productsToShow.map((product) => (
      <ListStyle key={product.product_id}>
        <ProductItem
          name={product.name}
          price={product.price}
          picture_key={product.picture_key}
        />
        <button
          type="button"
          onClick={() => clickEvent(product)}
        >
          {buttonName}
        </button>
      </ListStyle>
    ))}
  </ListContainer>

);

const ListContainer = styled.div`
display: flex;
flex-flow: row wrap;
align-items: center;
justify-content: center;
text-align: center;
`;

const ListStyle = styled.li`
list-style: none;
margin: 2rem;
background-color: #f6f6f6;
height: 35rem;
width: 30rem;

@media (max-width: 600px) {
  height: 30rem;
  width: 25rem;

}
`;

export default ProductListItems;
