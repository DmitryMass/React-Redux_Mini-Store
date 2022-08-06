import React from 'react';

import applePay from '../../Assets/Icon/apple-pay.svg';
import googlePay from '../../Assets/Icon/google-pay.svg';
import facebook from '../../Assets/Icon/facebook.svg';
import instagramm from '../../Assets/Icon/instagramm.svg';
import youtube from '../../Assets/Icon/youtube.svg';

import styles from './footer.m.css';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div
          className={`${styles.footer__main} d-flex align-items-center justify-content-between`}
        >
          <div className={styles.footer__messengers}>
            <a className={styles.footer__link} href="#">
              <object data={facebook} type=""></object>
            </a>
            <a className={styles.footer__link} href="#">
              <object data={instagramm} type=""></object>
            </a>
            <a className={styles.footer__link} href="#">
              <object data={youtube} type=""></object>
            </a>
          </div>
          <div className="footer__pay">
            <a className={styles.footer__link} href="#">
              <object data={applePay} type=""></object>
            </a>
            <a className={styles.footer__link} href="#">
              <object data={googlePay} type=""></object>
            </a>
          </div>
        </div>
        <div className={styles.footer__rights}>
          © Internet store Jay-Store - everything to your taste 2022
        </div>
      </div>
    </div>
  );
};

export default Footer;
