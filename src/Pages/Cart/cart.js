import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PAGE_ROUTES } from '../../Components/Utils';

import { nanoid } from 'nanoid';

import styles from './cart.m.css';
import RenderCart from './CartItem/cart-item';
import Title from '../../Components/Title';
import EmptyCart from '../../Components/EmptyCart';

const Cart = () => {
  const items = useSelector((state) => state.productsReducer.cartItems);
  const total = items.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);

  return (
    <div className={styles.shopping__cart}>
      <div className="container">
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className={styles.card__wrapper}>
              <div className={styles.card__title_wrapper}>
                <Title>The product chosen by you</Title>
              </div>
              <div className={styles.card__info}>
                {items.map((elem) => {
                  return <RenderCart item={elem} key={nanoid()} />;
                })}
              </div>
            </div>
            <div className={styles.shopping__total}>
              <p>Total: ${new Intl.NumberFormat().format(total)}</p>
              <Link to={PAGE_ROUTES.ORDER} className="btn btn-info">
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
