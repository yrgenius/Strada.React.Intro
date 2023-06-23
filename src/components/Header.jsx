import React from 'react';
import styles from '../styles/Header.module.css';
import MyLink from './UI/MyLink/MyLink';
import { MyButton } from './UI/MyButton/MyButton';

const Header = ({ onClick }) => {
    return (
        <section className={styles.header}>
            <MyLink />
            <MyButton
                name={'Login'}
                onClick={onClick} />
        </section>
    );
};

export default Header;