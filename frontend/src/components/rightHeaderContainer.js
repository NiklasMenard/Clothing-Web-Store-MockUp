import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { newSearch } from '../reducers/productViewReducer';

const RightHeaderContainer = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.productView.newSearch);
  const location = useLocation();

  const handleSearchChange = (event) => {
    dispatch(newSearch(event.target.value));
  };

  return (
    <RightContainer visible={location}>
      <SearchBar
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search for Product"
      />
      <ShoppingCart to="/shoppingcart">
        <FaShoppingCart />
      </ShoppingCart>
    </RightContainer>
  );
};

const RightContainer = styled.div`
display: flex;
flex-direction: row;
flex: auto;
opacity: ${(props) => props.visible.pathname === '/shoppingcart' && '0'};
@media (max-width: 1300px ) {
  order: 3;
  justify-content: center;
}
`;

const ShoppingCart = styled(Link)`
color: inherit;
margin: 1rem;
font-size: 3rem;
position:absolute;
top:0;
right:0;
@media (max-width: 1300px ) {
  font-size 2rem;
}
`;

const SearchBar = styled.input`
align-self:flex-end;
margin-bottom: 2.5rem;
margin-left: 5rem;
width: 20rem;

@media (max-width: 1300px ) {
  margin-left: 1rem;
}
`;
export default RightHeaderContainer;
