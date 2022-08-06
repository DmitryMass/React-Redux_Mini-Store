import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import Footer from './Footer/footer';
import Header from './Header/header';

import { PAGE_ROUTES } from '../Components/Utils';
import { fetchProducts } from '../Store/Action/products';
import EachProduct from '../Pages/Each-product/each-product';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path={PAGE_ROUTES.HOME} element={<Home />} />
          <Route path={PAGE_ROUTES.CART} element={<Cart />} />
          <Route path=":productId" element={<EachProduct />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
