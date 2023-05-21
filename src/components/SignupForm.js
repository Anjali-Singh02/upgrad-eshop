import React, { Fragment, useEffect, useState } from 'react';
import './form.css';
import { Link } from 'react-router-dom';

const SignupForm = () => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		contact: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		console.log(`name = ${name}`);
		console.log(`value = ${value}`);
		// console.log(`using dot notation = ${user.name}`);
		// console.log(`using [] notation = ${user[name]}`);
		// console.log(`using [] notation = ${user['name']}`);

		setUser((ref) => ({ ...ref, [name]: value }));
	};
	useEffect(() => {
		console.log('user =', user);
	}, [user]);

	const [allArray, setAllArray] = useState([]);

	const handleSubmit = (e) => {
		const { firstName, lastName, email, password, contact } = user;
		e.preventDefault();
		if (firstName && lastName && email && password && contact) {
			const newArray = {
				firstName,
				lastName,
				email,
				password,
				contact,
			};
			setAllArray(...allArray, newArray);
			setUser({});
		} else {
			alert('Please fill all the input fields!');
		}
	};

	return (
		<Fragment>
			<div className="userForm register">
				<div className="title">
					<h2>Register</h2>
				</div>

				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Firstname"
						id="firstname"
						name="firstName"
						value={user.firstName}
						onChange={handleChange}
					/>
					<input
						type="text"
						placeholder="Lastname"
						id="lastname"
						name="lastName"
						value={user.lastName}
						onChange={handleChange}
					/>
					<input
						type="email"
						placeholder="Email"
						id="email"
						name="email"
						value={user.email}
						onChange={handleChange}
					/>
					<input
						type="password"
						placeholder="Password"
						id="password"
						name="password"
						value={user.password}
						onChange={handleChange}
					/>
					<input
						type="number"
						placeholder="Contact"
						id="contact"
						name="contact"
						value={user.contact}
						onChange={handleChange}
					/>
					<button type="submit" className="btn btnRegister">
						Register
					</button>
					<p>
						Already have an account? <Link to="/">Login </Link>
					</p>
				</form>
			</div>
		</Fragment>
	);
};
export default SignupForm;
