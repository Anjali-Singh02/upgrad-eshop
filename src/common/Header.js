import React, { useContext } from 'react';
import './Header.css';
import '../components/Navbar.css';
import { IconContext } from 'react-icons/lib';
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { BackendContext } from '../context/context';
const Header = () => {
	const { baseUrl } = useContext(BackendContext);

	const handleSearch = () => {
		fetch(`${baseUrl}api/v1/products`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className=" header-container">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/products">Products</Link>
				</li>

				<div className="search-container">
					<input
						type="text"
						placeholder="Search"
						className="search-input"
					/>
					<IconContext.Provider
						value={{
							size: '1.2em',
							className: 'global class name search-icon',
						}}
					>
						<BiSearchAlt />
					</IconContext.Provider>
				</div>
				<Button onClick={handleSearch}>Search</Button>
			</ul>

			<div className="btn-container">
				<Button variant="contained" className="button">
					Logout
				</Button>
			</div>
		</div>
	);
};

export default Header;
