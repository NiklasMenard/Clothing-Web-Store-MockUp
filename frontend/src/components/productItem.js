import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import pictureArray from '../utils/pictureArray';

const ProductItem = ({ name, picture_key }) => (
  <ItemWrapper>
    <h3>{name}</h3>
    <img src={pictureArray[picture_key].picture} alt="" />
  </ItemWrapper>
);

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  picture_key: PropTypes.number.isRequired,
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    align-self: center;
    font-size: 1.5rem;
  }
  img {
    align-self: center;
    height: 25rem;
    @media (max-width: 600px) {
      height: 20rem;
      width: 15rem;
    }
  }
`;

export default ProductItem;
