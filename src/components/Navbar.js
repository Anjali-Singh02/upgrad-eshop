import React, { Component, useState } from 'react';
import './Navbar.css';
import { Box, Button, Modal, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
const Navbar = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isSignedIn, setSignedIn] = useState(false);

	const logoLinks = [
		{
			link: '/',
			Component: RiShoppingBag3Fill,
			logo: 'uG-Eshop',
		},
	];
	const handleLoginOpen = () => {
		setIsLoggedIn(!isLoggedIn);
	};
	const handleSignIn = () => {
		setSignedIn(!isSignedIn);
	};

	return (
		<nav className="navbar-container">
			<div className="logo">
				{logoLinks.map((element) => {
					const { link, Component, logo } = element;
					return (
						<>
							<IconContext.Provider
								value={{
									className: 'global-class-name icon-style',
									size: '1em',
								}}
							>
								<Link to={link}>
									<Component />
									<br />
									{logo}
								</Link>
							</IconContext.Provider>
						</>
					);
				})}
			</div>
			<div className="btn-container">
				<Link to="/login">
					<Button
						variant="contained"
						className="button"
						onClick={handleLoginOpen}
					>
						{isLoggedIn ? 'Logout' : 'Login'}
					</Button>
				</Link>
				<Link to="/signup">
					<Button
						variant="contained"
						className="button"
						onClick={handleSignIn}
					>
						{isSignedIn ? 'Sign out' : 'Sign up'}
					</Button>
				</Link>
			</div>
		</nav>
	);
};
export default Navbar;
