import React from 'react';
import { useSelector } from 'react-redux';
import useProduct from '../UseProduct';

const AddButton = ({ productId }) => {
  const { onIncrease } = useProduct();
  const { cartItems } = useSelector((state) => state.productsReducer);
  const isExistInCart = cartItems.some((el) => el.id === productId);

  return (
    <button
      disabled={isExistInCart}
      onClick={() => !isExistInCart && onIncrease(productId)}
      className="btn btn-primary"
    >
      {isExistInCart ? 'Added to cart' : 'Add to cart'}
    </button>
  );
};

export default AddButton;
