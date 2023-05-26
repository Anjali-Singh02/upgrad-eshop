import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { BackendContext } from '../context/context';
import { Box, Button, TextField } from '@mui/material';

const Cart = () => {
	const { baseUrl } = useContext(BackendContext);
	const [addresses, setAddresses] = useState([
		{
			name: '',
			contactNumber: '',
			city: '',
			landmark: '',
			street: '',
			state: '',
			zipCode: '',
		},
	]);
	const [formData, setFormData] = useState({
		name: '',
		contactNumber: '',
		city: '',
		landmark: '',
		street: '',
		state: '',
		zipCode: '',
	});

	useEffect(() => {
		console.log(addresses);
	}, [addresses]);

	useEffect(() => {
		const auth_token = sessionStorage.getItem('auth-token');
		fetch(`${baseUrl}api/v1/addresses`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': auth_token, // Replace with your actual authentication token
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				// Handle the response data
				setAddresses(data);
				console.log(data);
			})
			.catch((error) => {
				// Handle any errors
				console.error('Error:', error);
			});
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const auth_token = sessionStorage.getItem('auth-token');

		fetch(`${baseUrl}api/v1/addresses`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': auth_token, // Replace with your actual authentication token
			},
			body: JSON.stringify(formData),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				// Handle the response data
				console.log(data);
			})
			.catch((error) => {
				// Handle any errors
				console.error('Error:', error);
			});

		// Reset form fields
		setFormData({
			name: '',
			contactNumber: '',
			city: '',
			landmark: '',
			street: '',
			state: '',
			zipCode: '',
		});
	};

	return (
		<div className="cart-container">
			<div>
				{addresses?.map((el, elXid) => {
					return (
						<Box
							sx={{
								borderRadius: '5px',
								border: '1px solid black',
							}}
						>
							<div>{el.street}</div>
							<div>
								{el.city} - {el.state}
							</div>
						</Box>
					);
				})}
			</div>
			<div>
				<h1 className="cart-title">Cart</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<TextField
							className="input"
							label="Name"
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="form-group">
						<TextField
							className="input"
							label="Contact Number"
							type="text"
							id="contactNumber"
							name="contactNumber"
							value={formData.contactNumber}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="form-group">
						<TextField
							className="input"
							label="City"
							type="text"
							id="city"
							name="city"
							value={formData.city}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="form-group">
						<TextField
							className="input"
							label="Landmark"
							type="text"
							id="landmark"
							name="landmark"
							value={formData.landmark}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group">
						<TextField
							className="input"
							label="Street"
							type="text"
							id="street"
							name="street"
							value={formData.street}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="form-group">
						<TextField
							className="input"
							label="State"
							type="text"
							id="state"
							name="state"
							value={formData.state}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="form-group">
						<TextField
							className="input"
							label="Zip Code"
							type="text"
							id="zipCode"
							name="zipCode"
							value={formData.zipCode}
							onChange={handleInputChange}
							required
						/>
					</div>
					<Button
						className="button"
						type="submit"
						variant="contained"
						color="primary"
					>
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Cart;
