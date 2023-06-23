import React from 'react';
import styles from './MyLink.module.css';

const MyLink = () => {
    return (
        <li className={styles.header__item}>
            <a className={styles.header__link}>Home</a>
        </li>
    );
};

export default MyLink;