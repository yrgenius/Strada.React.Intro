import { useState } from "react";
import { Input } from './UI/MyInput/Input';
import { MyButton } from './UI/MyButton/MyButton';
import styles from '../styles/ModalForm.module.css';

export default function ModalFormRegistration({ isRegistered, setIsRegistered }) {
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');
    const [visible, setVisible] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (userName && userPass) {
            console.log(`Логин: ${userName}`);
            console.log(`Пароль: ${userPass}`);
            setIsRegistered(!isRegistered);
        }
    }

    return (
        <div className={styles.modal}>
            <form onSubmit={onSubmit} className={styles.form}>
                <h1 className={styles.title}>{'Registration'}</h1>
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
                <MyButton name={'Sign In'} />
            </form>
        </div>
    );
}