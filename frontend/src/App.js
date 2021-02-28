import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from './styles/globalstyle';

import Header from './components/header';
import Footer from './components/footer';
import ProductView from './views/productView';
import ShoppingCartView from './views/shoppingCartView';
import { initializeProducts } from './reducers/productViewReducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  return (
    <MainWrapper>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/featured-clothing" component={ProductView} />
        <Route exact path="/mens-clothing" component={ProductView} />
        <Route exact path="/womens-clothing" component={ProductView} />
        <Route exact path="/shoppingcart" component={ShoppingCartView} />
        <Route path="/" component={ProductView}>
          <Redirect to="featured-clothing" />
        </Route>
      </Switch>
      <Footer />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-flow: column;
  background: grey;
  min-height: 100vh;
`;

export default App;
