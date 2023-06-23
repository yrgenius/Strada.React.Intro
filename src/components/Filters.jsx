import React from 'react';
import styles from '../styles/Filter.module.css';

const Filters = () => {
    return (
        <section className={styles.filters}>
            <h1 className={styles.title}>фильтры:</h1>
            <button className={styles.button}>сбросить все фильтры</button>
            <p>сортировать по:</p>
            <select name="filter" id="filter">
                <option value="name">жанр</option>
                <option value="year">год</option>
                <option value="price">цена</option>
            </select>
            <p>год релиза:</p>
            <select name="year" id="year">
                <option value="name">2020</option>
                <option value="year">2021</option>
                <option value="price">2022</option>
            </select>
            <ul>
                <li>боевик</li>
                <li>приключения</li>
                <li>мульт</li>
                <li>комедия</li>
                <li>криминал</li>
            </ul>
            <button className={styles.button}>сбросить все фильтры</button>
            <button className={styles.button}>сбросить все фильтры</button>
            <p className={styles.pagination}>1 of 1455</p>
        </section>
    );
};

export default Filters;