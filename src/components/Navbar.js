import React from 'react';
import './Navbar.css';
const Navbar = () => {
	return (
		<nav className="navbar-container">
			<div>logo</div>
			<div className="btn-container">
				<button className="login-btn">Login</button>
				<button className="signup-btn">Sign up</button>
			</div>
		</nav>
	);
};
export default Navbar;
