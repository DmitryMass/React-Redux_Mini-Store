import {
  ACTION_ADD_TO_CART,
  ACTION_ERROR,
  ACTION_FETCH_ONE_PRODUCT,
  ACTION_FILTER_CATEGORY,
  ACTION_PRODUCT_FETCH,
  ACTION_REMOVE_ALL_PRODUCT_FROM_CART,
  ACTION_REMOVE_FROM_CART,
  ACTION_SEARCH_PANEL,
} from '../Action/action';

const initialState = {
  products: [],
  cartItems: [],
  oneProduct: {},
  copiesProductsForFilter: [],
  error: false,
  loading: true,
  search: '',
  categories: [
    {
      name: 'All category',
      category: 'all',
    },
    {
      name: "Men's clothing",
      category: "men's clothing",
    },
    {
      name: "Women's clothing",
      category: "women's clothing",
    },
    {
      name: 'Electronics',
      category: 'electronics',
    },
    {
      name: 'Jewelery',
      category: 'jewelery',
    },
  ],
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_PRODUCT_FETCH:
      return {
        ...state,
        products: payload,
        loading: false,
        error: false,
        copiesProductsForFilter: payload,
      };
    case ACTION_FETCH_ONE_PRODUCT:
      return {
        ...state,
        loading: false,
        error: false,
        oneProduct: payload,
      };
    case ACTION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ACTION_ADD_TO_CART:
      return updateCurrentOrder(state, payload, 1);
    case ACTION_REMOVE_FROM_CART:
      return updateCurrentOrder(state, payload, -1);
    case ACTION_REMOVE_ALL_PRODUCT_FROM_CART:
      const item = state.cartItems.find(({ id }) => id === payload);
      return updateCurrentOrder(state, payload, -item.count);
    case ACTION_FILTER_CATEGORY:
      return {
        ...state,
        copiesProductsForFilter:
          payload === 'all'
            ? state.products
            : state.products.filter((product) => product.category === payload),
      };
    case ACTION_SEARCH_PANEL:
      return {
        ...state,
        search: payload,
        copiesProductsForFilter:
          payload === ''
            ? state.products
            : state.products.filter(({ title }) => {
                return title.toLowerCase().includes(payload.toLowerCase());
              }),
      };
    default:
      return state;
  }
};

function updateCurrentOrder(state, productId, quantity) {
  const { products, cartItems } = state;

  const product = products.find(({ id }) => id === productId);
  const productIndex = cartItems.findIndex(({ id }) => id === productId);
  const item = cartItems[productIndex];
  const newItem = updateCartItem(product, item, quantity);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, productIndex),
  };
}

function updateCartItems(cartItems, item, idx) {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
}

function updateCartItem(product, item, quantity) {
  if (item) {
    return {
      ...item,
      count: item.count + quantity,
      price: item.price + quantity * product.price,
    };
  } else {
    return {
      id: product.id,
      title: product.title,
      count: 1,
      price: product.price,
      image: product.image,
    };
  }
}

export default productsReducer;
