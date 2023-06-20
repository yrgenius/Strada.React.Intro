import React from 'react';
import style from '../styles/User.module.css';

const User = ({ num, content }) => {
    return (
        <div className={style.wrapper} >
            <span>{num}.  </span>
            {content}
        </div>
    );
};

export default User;