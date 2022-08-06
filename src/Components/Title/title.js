import React from 'react';

import styles from './title.m.css';

const Title = ({ children }) => {
  return <div className={styles.title}>{children}</div>;
};

export default Title;
