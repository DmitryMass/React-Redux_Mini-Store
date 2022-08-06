import { useDispatch, useSelector } from 'react-redux';
import { filterCategories } from '../../../Store/Action/products';

const useFilter = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.productsReducer);

  const chooseCategory = (category) => {
    dispatch(filterCategories(category));
  };

  return {
    categories,
    chooseCategory,
  };
};

export default useFilter;
