import React, { useContext, useEffect, useState } from 'react';
import Header from '../common/Header';
import './Products.css';
import { BackendContext } from '../context/context';
import { categories } from '../lib/index';
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
const Products = () => {
	const [state, setState] = useState({
		categories: categories,
		products: [],
	});
	const { baseUrl } = useContext(BackendContext);
	useEffect(() => {
		// fetch(`${baseUrl}api/v1/products/categories`, {
		// 	method: 'GET',
		// 	headers: { 'Content-Type': 'application/json' },
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		console.log('categories; ', data);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	}, []);
	const getApi = async () => {
		const response = await fetch('https://fakestoreapi.com/products');
		// console.log(response);
		const data = await response.json();
		setState((ref) => ({ ...ref, products: data }));
	};
	useEffect(() => {
		getApi();
	}, []);

	return (
		<div>
			{/* <Header />
			Product
			<br />
			<br /> */}

			<div className="content-container">
				<div className="sub-header-container">
					<h2>Products</h2>
					<div>
						<Button>Sorting</Button>
						<Button>Sorting</Button>
						<Button>Sorting</Button>
						<Button>Sorting</Button>
					</div>
				</div>
				<div className="body-container">
					<div className="filter-section">
						<h3>Filter By</h3>
						<Box>
							<FormControl fullWidth>
								<InputLabel
									id="demo-simple-select-label"
									sx={{ marginLeft: '16px' }}
								>
									Categories
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									// value={age}
									label="Categories"
									sx={{ width: '100%', marginLeft: '16px' }}
									// onChange={handleChange}
								>
									{state.categories?.map(
										(element, elemId) => {
											return (
												<MenuItem
													value={element}
													key={elemId}
												>
													{element}
												</MenuItem>
											);
										},
									)}
								</Select>
							</FormControl>
						</Box>
					</div>
					<div className="content-section">
						{state.products?.map((elem, elemId) => {
							return (
								<Link to={`/products/${elem.id}`}>
									<ProductCard key={elemId} element={elem} />
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
