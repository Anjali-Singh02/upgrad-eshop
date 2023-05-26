// import Navbar from '../Navbar';
import { SessionContext } from '../../context/context';
import { useEffect, useState } from 'react';
import Header from '../Header.js';
const Layout = ({ children }) => {
	const [state, setState] = useState({
		username: '',
		email: '',
	});
	useEffect(() => {
		setState({
			username: sessionStorage.getItem('name') || 'Guest',
			email: sessionStorage.getItem('email') || '',
		});
	}, []);
	return (
		<div>
			<SessionContext.Provider
				value={{
					username: state.username,
					email: state.email,
					setState: setState,
				}}
			>
				<Header />
				<div
					style={{
						textAlign: 'center',
						width: '100%',
						margin: 'auto',
					}}
				>
					{children}
				</div>
			</SessionContext.Provider>
		</div>
	);
};

export default Layout;
