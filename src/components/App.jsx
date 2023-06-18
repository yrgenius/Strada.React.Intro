import { useEffect, useState } from "react";
import Main from "./Main.jsx";
import Users from "./Users.jsx";
import ModalFormRegistration from './ModalFormRegistration.jsx';
import ModalFormLogin from "./ModalFormLogin.jsx";
import { MyButton } from "./UI/MyButton/MyButton.jsx";
import styles from '../styles/App.css';
import axios from "axios";


function App() {
	const [showForm, setShowForm] = useState(false);
	const [isRegistered, setIsRegistered] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	const [userName, setUserName] = useState('');
	const [users, setUsers] = useState([]);
	useEffect(() => { getUsers() }, []);

	async function getUsers() {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
		setUsers(response.data);
	}

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
					<h2 style={{ textAlign: 'center' }}>Приветствуем Вас {userName}</h2>}
				<Users users={users} />
			</Main>
		</div>
	);
}

export default App;
