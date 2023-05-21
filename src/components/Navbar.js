import React, { useState } from 'react';
import './Navbar.css';
import { Box, Button, Modal, Typography } from '@mui/material';
import SignupForm from './SignupForm';
import { Link } from 'react-router-dom';
const Navbar = () => {
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	const [signupOpen, setSignupOpen] = useState(false);

	const handleSignUpOpen = () => {
		setSignupOpen(true);
	};

	return (
		<nav className="navbar-container">
			<div>logo</div>
			<div className="btn-container">
				<Link to="/signup">
					<button className="signup-btn" onClick={handleSignUpOpen}>
						Sign up
					</button>
				</Link>
			</div>
		</nav>
	);
};
export default Navbar;
