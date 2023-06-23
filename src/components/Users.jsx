import React from 'react';
import User from './User';
import styles from '../styles/Users.module.css';

const Users = ({ users }) => {
    return (
        <div className={styles.wrapper}>
            {
                users.map(user => {
                    return (
                        <User key={user.id} num={user.id} content={user.title} />
                    );
                })
            }
        </div>
    );
};

export default Users;