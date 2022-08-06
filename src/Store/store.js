import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './Reducers/products';

const store = createStore(
  combineReducers({ productsReducer }),
  applyMiddleware(thunk)
);

export default store;
