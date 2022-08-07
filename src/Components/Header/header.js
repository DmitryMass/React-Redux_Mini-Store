import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './header.m.css';

import { PAGE_ROUTES } from '../Utils';
import { useSelector } from 'react-redux';
import SearchPanel from '../Search-panel/search-panel';

const Header = () => {
  const count = useSelector((state) => state.productsReducer.cartItems);
  const sumOfCount = count.reduce((prev, curr) => {
    return prev + curr.count;
  }, 0);

  return (
    <header className={styles.header}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link to={PAGE_ROUTES.HOME} className={styles.header__logo}>
          Jay-Store
        </Link>
        <div className={styles.header__search}>
          <SearchPanel />
        </div>
        <div className={styles.header__cart}>
          <Link to={PAGE_ROUTES.CART} className={styles.header__cart_link}>
            <i className="fa-solid fa-cart-arrow-down"></i>
            <span className={styles.header__count}>{sumOfCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
