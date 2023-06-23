import { useEffect, useState } from "react";
import Main from "./Main.jsx";
import Users from "./Users.jsx";
import ModalFormRegistration from './ModalFormRegistration.jsx';
import ModalFormLogin from "./ModalFormLogin.jsx";
import UsersService from "./utils/fetchUsers.js";
import Header from "./Header.jsx";
import styles from '../styles/App.css';
import Filters from "./Filters.jsx";


function App() {
	const [showForm, setShowForm] = useState(false);
	const [isRegistered, setIsRegistered] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	const [userName, setUserName] = useState('');
	const [users, setUsers] = useState([]);
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);
	const storage = window.localStorage;
	const pagesArray = [];

	useEffect(() => {
		let ignore = false;
		getUsers(ignore);
		setLocalStorage();
		return () => ignore = true;
	}, []);

	async function setLocalStorage() {
		users.map(user => {
			storage.setItem(user.id, JSON.stringify(user));
		})
		console.log(users);
	}

	async function getUsers(ignore) {
		const response = await UsersService.getUsers();
		if (!ignore) {
			setUsers(response.data);
			setTotalPages(response.headers["x-total-count"]);
		}
	}

	const handleButton = () => {
		setShowForm(!showForm);
	}

	const changePage = (page) => {
		setCurrentPage(page);
		console.log(page);
	}

	return (
		<div className={styles.wrapper}>
			<Header onClick={handleButton} />
			<Filters />
			<Main>
				{/* <MyButton name={'Sign In'} onClick={handleButton} /> */}
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
				<div className="page__wrapper">
					{pagesArray.map((page, i) =>
						<span className={page === currentPage ? 'page page__current' : 'page'}
							key={page}
							onClick={() => changePage(page)}>
							{page}
						</span>)
					}</div>
			</Main>
		</div>
	);
}

export default App;
