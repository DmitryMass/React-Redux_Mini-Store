import { useDispatch } from 'react-redux';
import {
  onAddedCartItem,
  onDeleteAllProductsFromCart,
  onDeleteCartItem,
} from '../../Store/Action/products';

const useProduct = () => {
  const dispatch = useDispatch();
  const onIncrease = (id) => {
    dispatch(onAddedCartItem(id));
  };

  const removeFromCart = (id) => {
    dispatch(onDeleteAllProductsFromCart(id));
  };

  const onDecrease = (id) => {
    dispatch(onDeleteCartItem(id));
  };

  return {
    onIncrease,
    removeFromCart,
    onDecrease,
  };
};

export default useProduct;
