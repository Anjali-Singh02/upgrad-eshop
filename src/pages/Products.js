import React, { useContext, useEffect, useState } from 'react';
import './Products.css';
import { BackendContext } from '../context/context';
import { categories } from '../lib/index';
import {
	Box,
	Button,
	ButtonGroup,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BiSearchAlt } from 'react-icons/bi';
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
		<div>
			{/* <Header />
			Product
			<br />
			<br /> */}

			<div className="content-container">
				<div className="sub-header-container">
					<div className="search-container">
						<div className="search-bar">
							<div>
								<input
									type="text"
									placeholder="Search"
									className="search-input"
								/>
								<IconContext.Provider
									value={{
										size: '1.2em',
										className:
											'global class name search-icon',
									}}
								>
									<BiSearchAlt />
								</IconContext.Provider>
							</div>
							<div className="btn-container">
								<Button
									variant="contained"
									onClick={handleSearch}
									className="button"
								>
									Search
								</Button>
							</div>
						</div>

						<ButtonGroup
							variant="outlined"
							aria-label="outlined button group"
							className="btn-group"
						>
							<Button className="tab-btn">Default</Button>
							<Button className="tab-btn">
								Price High to Low
							</Button>
							<Button className="tab-btn">
								Price Low to High
							</Button>
							<Button className="tab-btn">New</Button>
						</ButtonGroup>
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
