import React from 'react';
import { Link } from 'react-router-dom';
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
        <SearchPanel />
        <div className={styles.header__cart}>
          <Link className={styles.header__cart_link} to={PAGE_ROUTES.CART}>
            <i className="fa-solid fa-cart-arrow-down"></i>
            <span className={styles.header__count}>{sumOfCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
