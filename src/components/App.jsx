import { useEffect, useState } from "react";
import Main from "./Main.jsx";
import Users from "./Users.jsx";
import ModalFormRegistration from './ModalFormRegistration.jsx';
import ModalFormLogin from "./ModalFormLogin.jsx";
import { MyButton } from "./UI/MyButton/MyButton.jsx";
import UsersService from "./utils/fetchUsers.js";
import { getPageArray, getPageCount } from "./utils/pages.js";
import styles from '../styles/App.css';


function App() {
	const [showForm, setShowForm] = useState(false);
	const [isRegistered, setIsRegistered] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	const [userName, setUserName] = useState('');
	const [users, setUsers] = useState([]);
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);
	const limitPage = 10;
	useEffect(() => { getUsers() }, [currentPage]);
	const pagesArray = getPageArray(totalPages);

	async function getUsers() {
		const response = await UsersService.getUsers(limitPage, currentPage);
		setUsers(response.data);
		// получаем из хедера кол-во юзеров
		const totalCount = response.headers["x-total-count"];
		// делим кол-во юзеров на кол-во юзеров на одной странице, 
		// получаем количество страниц, сохраняем в стейт
		setTotalPages(getPageCount(totalCount, limitPage));
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
