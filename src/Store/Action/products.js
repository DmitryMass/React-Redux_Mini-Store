import { getAllProducts, getOneProduct } from '../../Components/Api/component';
import {
  ACTION_ADD_TO_CART,
  ACTION_ERROR,
  ACTION_FETCH_ONE_PRODUCT,
  ACTION_FILTER_CATEGORY,
  ACTION_PRODUCT_FETCH,
  ACTION_REMOVE_ALL_PRODUCT_FROM_CART,
  ACTION_REMOVE_FROM_CART,
  ACTION_SEARCH_PANEL,
} from './action';

export function fetchProducts() {
  return async (dispatch) => {
    try {
      const data = await getAllProducts();
      dispatch({ type: ACTION_PRODUCT_FETCH, payload: data });
    } catch (e) {
      dispatch({ type: ACTION_ERROR, payload: true });
    }
  };
}

export function fetchOneProduct(id) {
  return async (dispatch) => {
    try {
      const data = await getOneProduct(id);
      dispatch({ type: ACTION_FETCH_ONE_PRODUCT, payload: data });
    } catch (e) {
      dispatch({ type: ACTION_ERROR, payload: true });
    }
  };
}

export function onAddedCartItem(productId) {
  return { type: ACTION_ADD_TO_CART, payload: productId };
}

export function onDeleteCartItem(productId) {
  return { type: ACTION_REMOVE_FROM_CART, payload: productId };
}

export function onDeleteAllProductsFromCart(productId) {
  return {
    type: ACTION_REMOVE_ALL_PRODUCT_FROM_CART,
    payload: productId,
  };
}

//  Filters
export function filterCategories(filteredProduct) {
  return { type: ACTION_FILTER_CATEGORY, payload: filteredProduct };
}
// Search panel
export function searchFilter(value) {
  return { type: ACTION_SEARCH_PANEL, payload: value };
}
