import React, { useState, useContext } from 'react';
import CustomModal from './Modal';
import './Header.css';
import { BackendContext } from '../context/context';
import { Link, useParams } from 'react-router-dom';
import { Button, Tabs, Tab, Box, TextField } from '@mui/material';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import jwt_decode from 'jwt-decode';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ textAlign: 'center', width: '100%' }}>
					{children}
				</Box>
			)}
		</div>
	);
}

const Header = ({ showBookShowButton }) => {
	const { baseUrl } = useContext(BackendContext);
	const { id } = useParams();

	const [state, setState] = useState({
		modalIsOpen: false,
		value: 0,
		loggedIn: sessionStorage.getItem('access-token') == null ? false : true,
	});
	const [login, setLogin] = useState({
		email: '',
		password: '',
	});
	const [signUp, setSignUp] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		contactNumber: '',
	});

	const toggleModal = () => {
		if (state.modalIsOpen) {
			setState((ref) => ({ ...ref, modalIsOpen: false }));
		} else {
			setState((ref) => ({ ...ref, modalIsOpen: true }));
		}
	};

	const tabChangeHandler = (event, value) => {
		setState((ref) => ({ ...ref, value }));
	};

	const handleSignup = () => {
		console.log(signUp, JSON.stringify(signUp));
		fetch(`${baseUrl}api/v1/users`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(signUp),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setSignUp({
					firstName: '',
					lastName: '',
					email: '',
					password: '',
					contactNumber: '',
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleLogin = () => {
		fetch(`${baseUrl}api/v1/auth`, {
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify(login),
		})
			.then((response) => {
				const token = response.headers.get('X-Auth-Token');
				console.log(token);
				const decode = jwt_decode(token);
				console.log(decode);
				sessionStorage.setItem('auth-token', token);
				sessionStorage.setItem('uuid', decode._id);
				sessionStorage.setItem('isAdmin', decode.isAdmin);
				return response.json();
			})
			.then((data) => {
				console.log(data);
				sessionStorage.setItem('name', data.name);
				sessionStorage.setItem('email', data.email);

				// set Cookie
				setState({ username: data.name, email: data.email });
			})
			.catch((err) => {
				console.log(err);
			});
		setLogin({ email: '', password: '' });
	};

	const handleLogout = () => {
		fetch(`${baseUrl}auth/logout`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'no-cache',
			},
			body: JSON.stringify({ uuid: sessionStorage.getItem('uuid') }),
		})
			.then((response) => response.json())
			.then((data) => {
				sessionStorage.removeItem('uuid');
				sessionStorage.removeItem('access-token');
				console.log(data);
			})
			.catch((err) => console.log(err));
	};

	const handleSignupChange = (event) => {
		const { name, value } = event.target;
		setSignUp((ref) => ({ ...ref, [name]: value }));
	};

	const handleLoginChange = (event) => {
		const { name, value } = event.target;
		setLogin((ref) => ({ ...ref, [name]: value }));
	};

	return (
		<div>
			<header className="app-header">
				<div className="logo">
					<IconContext.Provider
						value={{
							className: 'global-class-name icon-style',
							size: '1em',
						}}
					>
						<Link to={'/'}>
							<RiShoppingBag3Fill />
							uG-Eshop
						</Link>
					</IconContext.Provider>
				</div>
				{!state.loggedIn ? (
					<div className="login-button">
						<Button
							color="primary"
							variant="contained"
							onClick={toggleModal}
						>
							Login
						</Button>
					</div>
				) : (
					<div className="login-button">
						<Button
							color="default"
							variant="contained"
							onClick={handleLogout}
						>
							Logout
						</Button>
					</div>
				)}
				{showBookShowButton === 'true' && !state.loggedIn ? (
					<div className="bookshow-button">
						<Button
							color="primary"
							variant="contained"
							onClick={toggleModal}
						>
							Book Show
						</Button>
					</div>
				) : null}

				{showBookShowButton === 'true' && state.loggedIn ? (
					<div className="bookshow-button">
						<Link to={'/bookshow/' + id}>
							<Button variant="contained" color="primary">
								Book Show
							</Button>
						</Link>
					</div>
				) : null}
			</header>

			{/* modal of login and signup  */}
			<CustomModal isOpen={state.modalIsOpen} handleClose={toggleModal}>
				<Tabs
					className="tabs"
					value={state.value}
					onChange={tabChangeHandler}
					centered
				>
					<Tab label="Login" />
					<Tab label="Register" />
				</Tabs>

				{/* login tab  */}
				<TabPanel value={state.value} index={0}>
					<Box
						sx={{
							marginBottom: '15px',
						}}
					>
						<TextField
							required
							label="Username"
							id="username"
							name={'email'}
							type="text"
							sx={{ width: '100%' }}
							email={login.email}
							onChange={handleLoginChange}
						/>
					</Box>
					<Box
						sx={{
							marginBottom: '15px',
						}}
					>
						<TextField
							required
							label="Password"
							id="password"
							name={'password'}
							type="text"
							sx={{ width: '100%' }}
							password={login.password}
							onChange={handleLoginChange}
						/>
					</Box>
					<Box>
						<Button variant="contained" onClick={handleLogin}>
							Login
						</Button>
					</Box>
				</TabPanel>

				{/* signup tab */}
				<TabPanel value={state.value} index={1}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-evenly',
							marginBottom: '15px',
						}}
					>
						<TextField
							required
							label="First Name"
							id="firstName"
							name="firstName"
							type="text"
							sx={{ width: '100%', marginRight: '5px' }}
							firstName={signUp.firstName}
							onChange={handleSignupChange}
						/>
						<TextField
							required
							label="Last Name"
							id="lastName"
							name={'lastName'}
							type="text"
							sx={{ width: '100%', marginLeft: '5px' }}
							lastName={signUp.lastName}
							onChange={handleSignupChange}
						/>
					</Box>

					<Box
						sx={{
							marginBottom: '15px',
						}}
					>
						<TextField
							required
							label="Email"
							id="email"
							name={'email'}
							type="text"
							sx={{ width: '100%' }}
							email={signUp.email}
							onChange={handleSignupChange}
						/>
					</Box>
					<Box
						sx={{
							marginBottom: '15px',
						}}
					>
						<TextField
							required
							id="password"
							label="password"
							type="password"
							name={'password'}
							sx={{ width: '100%' }}
							autoComplete="current-password"
							password={signUp.password}
							onChange={handleSignupChange}
						/>
					</Box>
					<Box
						sx={{
							marginBottom: '15px',
						}}
					>
						<TextField
							required
							label="Contact No."
							id="contact"
							type="text"
							sx={{ width: '100%' }}
							name={'contactNumber'}
							contact={signUp.contactNumber}
							onChange={handleSignupChange}
						/>
					</Box>
					<Box>
						<Button variant="contained" onClick={handleSignup}>
							Sign Up
						</Button>
					</Box>
				</TabPanel>
			</CustomModal>
		</div>
	);
};

export default Header;
