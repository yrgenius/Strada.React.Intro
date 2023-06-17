import React from 'react';
import  styles from '../styles/Main.module.css';

const Main = ({children}) => {
    return (
        <section className={styles.container}>
            {children}
        </section>
    );
};

export default Main;
