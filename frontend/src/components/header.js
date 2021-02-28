import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import StoreLogo from '../resources/header_logo.png';
import LeftContainer from './leftHeaderContainer';
import RightContainer from './rightHeaderContainer';

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer height={location}>
      <LeftContainer />
      <Logo />
      <RightContainer />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  background: #b6d5e1;
  height: 30rem;
  @media (max-width: 1300px ) {
    height: ${((props) => (props.height.pathname === '/shoppingcart' && '20rem'))};
  }
`;

const Logo = styled.div`
  height: 30rem;
  width: 30rem;
  align-self: center;
  flex: none;
  background: url(${StoreLogo}) no-repeat center / cover;
  @media (max-width: 1300px ) {
    height: 15rem;
    width: 15rem;
    order: 1;
  }
`;

export default Header;
