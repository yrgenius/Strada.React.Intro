import { useState } from "react";
import Main from "./Main.jsx";
import ModalFormRegistration from './ModalFormRegistration.jsx';
import ModalFormLogin from "./ModalFormLogin.jsx";
import { MyButton } from "./UI/MyButton/MyButton.jsx";
import styles from '../styles/App.css';


function App() {
	const [showForm, setShowForm] = useState(false);
	const [isRegistered, setIsRegistered] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	const [userName, setUserName] = useState('');

	const handleButton = () => {
		setShowForm(!showForm);
	}

	return (
		<div className={styles.wrapper}>
			<Main>
				<MyButton name={'Sign In'} onClick={handleButton} />
				{showForm && !isRegistered &&
					<ModalFormRegistration isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
				}
				{isRegistered && !isLogin &&
					< ModalFormLogin
						isLogin={isLogin}
						setIsLogin={setIsLogin}
						setUserName={setUserName} />
				}
				{isLogin &&
					<h2>Приветствуем Вас {userName}</h2>}
			</Main>
		</div>
	);
}

export default App;
