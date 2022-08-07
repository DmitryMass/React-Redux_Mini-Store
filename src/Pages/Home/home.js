import React from 'react';
import FilterPanel from '../../Components/FIlter-panel/filter-panel';
import ProductList from '../../Components/ProductList/product-list';
import Title from '../../Components/Title';
import SearchPanel from '../../Components/Search-panel';

import styles from './home.m.css';
const Home = () => {
  return (
    <div className="container">
      <div className={styles.home__search_wrapper}>
        <Title>Products</Title>
        <div className={styles.home__search}>
          <SearchPanel />
        </div>
      </div>
      <div className={styles.home}>
        <FilterPanel />
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
