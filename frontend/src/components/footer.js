import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <h2>Demo Footer</h2>
  </FooterContainer>
);

const FooterContainer = styled.div`
display: flex;
flex-flow: row;
background: pink;
height: 20rem;
justify-content: center;
align-items: center;
`;

export default Footer;
