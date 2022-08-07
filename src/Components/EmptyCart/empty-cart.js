import React from 'react';
import { Link } from 'react-router-dom';

import styles from './empty-cart.m.css';
import Spinner from '../Spinner';
import { PAGE_ROUTES } from '../Utils';

const EmptyCart = () => {
  return (
    <div className={styles.empty}>
      <Spinner />
      <div>
        <span className={styles.empty__text}>Your Cart is Empty</span>
        <Link to={PAGE_ROUTES.HOME}>Back to Products</Link>
      </div>
    </div>
  );
};

export default EmptyCart;
