import styles from './Input.module.css';

export function Input({ placeholder, type, onChange }) {
    return (
        <input
            className={styles.modal__input}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            type={type}
            required
        />
    );
}