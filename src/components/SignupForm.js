import React, { Fragment, useContext, useEffect, useState } from 'react';
import './form.css';
import { Link } from 'react-router-dom';
import { validateSignup } from '../utils/helper';
import { BackendContext } from '../context/context';

const SignupForm = () => {
	const { baseUrl } = useContext(BackendContext);
	console.log(baseUrl);

	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		contactNumber: '',
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
		e.preventDefault();
		const { firstName, lastName, email, password, contactNumber } = user;
		const isValid = validateSignup(user);
		if (!isValid) {
			console.log('Try again');
			return;
		}

		fetch(`${baseUrl}api/v1/users`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
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
						type="text"
						placeholder="Contact"
						id="contact"
						name="contactNumber"
						value={user.contactNumber}
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
