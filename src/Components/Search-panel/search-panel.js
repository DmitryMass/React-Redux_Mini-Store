import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchFilter } from '../../Store/Action/products';

import styles from './search-panel.m.css';

const SearchPanel = () => {
  const value = useSelector((state) => state.productsReducer.search);
  const dispatch = useDispatch();

  return (
    <div className={styles.search__panel}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className={styles.search__input}
        type="text"
        value={value}
        onChange={(e) => dispatch(searchFilter(e.target.value))}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchPanel;
