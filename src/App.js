import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const App = () => {
	return (
		<>
			<div>
				<Routes>
					<Route path="/" element={<SignupForm />} />
					<Route path="/login" element={<LoginForm />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
