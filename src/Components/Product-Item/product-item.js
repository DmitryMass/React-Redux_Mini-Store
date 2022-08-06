import React from 'react';
import { Link } from 'react-router-dom';
import AddButton from '../Add-Button/add-button';

import styles from './product-item.m.css';

const ProductItem = ({ product }) => {
  const { image, title, price, id } = product;
  return (
    <div className={`card ${styles.card__product}`}>
      <Link to={`/${id}`} className={styles.card__link}>
        <img className="card-img-top" src={image} alt="product image" />
        <h5 className={styles.card__title}>{title}</h5>
      </Link>
      <div className="card-body">
        <div className={styles.card__btn}>
          <span className={styles.card__price}>{`${price} $`}</span>
          <AddButton productId={id} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
