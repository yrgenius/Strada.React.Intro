import React from 'react';
import styles from './MyButton.module.css';

export const MyButton = ({name, onClick}) => {
    return (
        <button className={styles.btn} onClick={onClick}>{name}</button>
    );
};

