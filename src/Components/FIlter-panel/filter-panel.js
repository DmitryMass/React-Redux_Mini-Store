import React from 'react';
import useFilter from './useFilter/useFilter';

import { nanoid } from 'nanoid';
import styles from './filter-panel.m.css';

const FilterPanel = () => {
  const { categories, chooseCategory } = useFilter();

  return (
    <div className={styles.filter}>
      <div className={styles.filter__category}>
        {categories.map(({ name, category }) => {
          return (
            <button
              className={`btn btn-light ${styles.filter__btn}`}
              onClick={() => chooseCategory(category)}
              key={nanoid()}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterPanel;
