import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Home from './pages/Home';
import Products from './pages/Products';

const App = () => {
	return (
		<>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<SignupForm />} />
					<Route path="/login" element={<LoginForm />} />
					<Route path="/products" element={<Products />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
