import './form.css';
import { Fragment, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { validateLogin } from '../utils/helper';
import { BackendContext } from '../context/context';
import jwt_decode from 'jwt-decode';

const LoginForm = () => {
	const { baseUrl } = useContext(BackendContext);
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUser((ref) => ({ ...ref, [name]: value }));
		//{email:'',password:''}
	};

	const submitForm = (e) => {
		e.preventDefault();
		const isValid = validateLogin(user);

		if (!isValid) {
			console.log("Email password can't be empty");
			return;
		}

		fetch(`${baseUrl}api/v1/auth`, {
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify(user),
		})
			.then((response) => {
				const token = response.headers.get('X-Auth-Token');
				console.log(token);
				const decode = jwt_decode(token);
				console.log(decode);
				sessionStorage.setItem('uuid', decode._id);
				return response.json();
			})
			.then((data) => {
				console.log(data);
				//set Cookie
			})
			.catch((err) => {
				console.log(err);
			});
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
