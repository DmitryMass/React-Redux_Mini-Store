import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../Product-Item/product-item';
import Spinner from '../Spinner';
import Error from '../Error';
import { nanoid } from 'nanoid';

import styles from './product-list.m.css';

const ProductList = () => {
  const getProducts = useSelector(
    (state) => state.productsReducer.copiesProductsForFilter
  );
  const isError = useSelector((state) => state.productsReducer.error);
  const isLoading = useSelector((state) => state.productsReducer.loading);

  if (isError) {
    return <Error />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={`${styles.product__list}`}>
      {getProducts.map((product) => {
        return (
          <li key={nanoid()} className={styles.product__item}>
            <ProductItem product={product} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
