import React from 'react';
import styles from '../styles/Filter.module.css';

const Filters = () => {
    return (
        <section className={styles.filters}>
            <h1 className={styles.title}>фильтры:</h1>
            <button className={styles.button}>сбросить все фильтры</button>
            <p className={styles.subtitle}>сортировать по:</p>
            <select name="filter" id="filter">
                <option value="name">жанр</option>
                <option value="year">год</option>
                <option value="price">цена</option>
            </select>
            <p className={styles.subtitle}>год релиза:</p>
            <select name="year" id="year">
                <option value="name">2020</option>
                <option value="year">2021</option>
                <option value="price">2022</option>
            </select>
            <ul className={styles.list}>

                <li className={styles.item}>
                    <input className={styles.checkbox} type='checkbox' name='filter_input' value={'боевик'} />
                    <label className={styles.label} htmlFor="filter_input">боевик</label>
                </li>
                <li className={styles.item}>
                    <input className={styles.checkbox} type='checkbox' name='filter_input' value={'боевик'} />
                    <label className={styles.label} htmlFor="filter_input">боевик</label>
                </li>
                <li className={styles.item}>
                    <input className={styles.checkbox} type='checkbox' name='filter_input' value={'боевик'} />
                    <label className={styles.label} htmlFor="filter_input">боевик</label>
                </li>
                <li className={styles.item}>
                    <input className={styles.checkbox} type='checkbox' name='filter_input' value={'боевик'} />
                    <label className={styles.label} htmlFor="filter_input">боевик</label>
                </li>
                <li className={styles.item}>
                    <input className={styles.checkbox} type='checkbox' name='filter_input' value={'боевик'} />
                    <label className={styles.label} htmlFor="filter_input">боевик</label>
                </li>
                <li className={styles.item}>
                    <input className={styles.checkbox} type='checkbox' name='filter_input' value={'боевик'} />
                    <label className={styles.label} htmlFor="filter_input">боевик</label>
                </li>

            </ul>
            <div className={styles.button__wrapper}>
                <button className={styles.nav_button}>назад</button>
                <button className={styles.nav_button}>вперед</button>
            </div>

            <p className={styles.pagination}>1 of 1455</p>
        </section>
    );
};

export default Filters;