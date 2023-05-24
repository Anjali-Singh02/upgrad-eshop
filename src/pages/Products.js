import React, { useContext, useEffect, useState } from 'react';
import Header from '../common/Header';
import { BackendContext } from '../context/context';

const Products = () => {
	const [state, setState] = useState({
		categories: '',
	});
	const { baseUrl } = useContext(BackendContext);
	useEffect(() => {
		fetch(`${baseUrl}api/v1/products/categories`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('categories; ', data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			<Header />
			Product
			<br />
			<br />
			Categories: {state.categories}
		</div>
	);
};

export default Products;
