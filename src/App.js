import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const App = () => {
	return (
		<>
			<div>
				<Routes>
					<Route path="/" element={<LoginForm />} />
					<Route path="/signup" element={<SignupForm />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
