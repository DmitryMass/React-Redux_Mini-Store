import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddButton from '../../Components/Add-Button/add-button';
import Error from '../../Components/Error';
import Spinner from '../../Components/Spinner';
import { fetchOneProduct } from '../../Store/Action/products';
import styles from './each-product.m.css';

const EachProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { loading, error, oneProduct } = useSelector(
    (state) => state.productsReducer
  );
  const { description, title, image, price, id } = oneProduct;

  useEffect(() => {
    dispatch(fetchOneProduct(productId));
  }, [productId]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="container">
      <div className={`${styles.each__card} d-flex align-items-center`}>
        <div className={styles.each__img_wrap}>
          <img src={image} alt="productCard" />
        </div>
        <div className={styles.each__body}>
          <h5 className={styles.each__title}>{title}</h5>
          <p className={styles.each__description}>{description}</p>
          <div className={`${styles.each__btn} d-flex align-items-center`}>
            <p className={styles.each__price}>{price}$</p>
            <AddButton productId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
