import './form.css';
import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [allUsers, setAllUsers] = useState('');

	const submitForm = (e) => {
		e.preventDefault();
		if (email && password) {
			const newArray = { email, password };

			console.log(newArray);

			setAllUsers([...allUsers, newArray]);
			setEmail('');
			setPassword('');
		} else {
			alert('Please fill all the input fields');
		}
	};
	return (
		<Fragment>
			<div className="userForm signInForm">
				<div className="title">
					<h2>Sign In</h2>
				</div>

				<form onSubmit={submitForm}>
					<input
						type="text"
						placeholder="Email"
						id="email"
						name="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<input
						type="password"
						placeholder="Password"
						id="password"
						name="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<p>Forgot password?</p>
					<button type="submit" className="btn btnSignIn">
						Sign in
					</button>
					<p>
						Do you have an account?
						<Link to="/signup">
							<a> Create one</a>
						</Link>
					</p>
				</form>
			</div>
		</Fragment>
	);
};
export default LoginForm;
