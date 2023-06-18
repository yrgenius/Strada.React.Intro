import React from 'react';
import style from '../styles/User.module.css';

const User = ({ content }) => {
    return (
        <div className={style.wrapper} >
            {content}
        </div>
    );
};

export default User;