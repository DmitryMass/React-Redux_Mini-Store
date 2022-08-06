import React from 'react';
import useProduct from '../../../Components/UseProduct';

import styles from './cart-item.m.css';

const RenderCart = ({ item }) => {
  const { removeFromCart, onIncrease, onDecrease } = useProduct();
  return (
    <div className={`card mb-3 ${styles.card__cart}`}>
      <div className="row g-0">
        <div className={`col-md-4 ${styles.card__img}`}>
          <img className="img-fluid rounded-start" src={item.img} alt="" />
        </div>
        <div className="col-md-8">
          <div className={`card-body ${styles.card__body}`}>
            <div>
              <h5 className="card-title">{item.title}</h5>
              <div className="d-flex align-items-center">
                <p className="card-text">{item.count}</p>
                <button
                  onClick={() => onDecrease(item.id)}
                  className="btn btn-warning"
                >
                  <i className="fa-solid fa-circle-minus"></i>
                </button>
                <button
                  onClick={() => onIncrease(item.id)}
                  className="btn btn-success"
                >
                  <i className="fa-solid fa-circle-plus"></i>
                </button>
              </div>
              <p className="card-text">
                {new Intl.NumberFormat().format(item.price)}$
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="btn btn-danger"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderCart;
