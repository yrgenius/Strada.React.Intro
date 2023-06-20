import { useEffect, useState } from "react";
import axios from "axios";
import Main from "./Main.jsx";
import Users from "./Users.jsx";
import ModalFormRegistration from './ModalFormRegistration.jsx';
import ModalFormLogin from "./ModalFormLogin.jsx";
import { MyButton } from "./UI/MyButton/MyButton.jsx";
import styles from '../styles/App.css';
import UsersService from "./utils/fetchUsers.js";


function App() {
	const [showForm, setShowForm] = useState(false);
	const [isRegistered, setIsRegistered] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	const [userName, setUserName] = useState('');
	const [users, setUsers] = useState([]);
	const [totalPages, setTotalPages] = useState(0);
	useEffect(() => { getUsers() }, []);

	async function getUsers() {
		const response = await UsersService.getUsers();
		setUsers(response.data);
		setTotalPages(response.headers["x-total-count"]);
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
