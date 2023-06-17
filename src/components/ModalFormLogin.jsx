import { useState } from "react";
import { Input } from './UI/MyInput/Input';
import { MyButton } from './UI/MyButton/MyButton';
import styles from '../styles/ModalForm.module.css';

export default function ModalFormLogin({ isLogin, setIsLogin, setUserName: setUser }) {
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');

    const logForm = (e) => {
        e.preventDefault();

        if (userName && userPass) {
            console.log(`Логин: ${userName}`);
            console.log(`Пароль: ${userPass}`);
            setIsLogin(!isLogin);
            setUser(userName);
        }
    }

    return (
        <div className={styles.modal}>
            <form onSubmit={logForm} className={styles.form}>
                <h1 className={styles.title}>{'Log In'}</h1>
                <Input
                    value={userName}
                    onChange={setUserName}
                    placeholder='Username'
                    type='text' />
                <Input
                    value={userPass}
                    onChange={setUserPass}
                    placeholder='Password'
                    type='password' />
                <MyButton name={'Log In'} />
            </form>
        </div>
    );
}