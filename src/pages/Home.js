import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../common/Header';
import banner from '../assets/banner.jpg';
import product from '../assets/product.jfif';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';

const Home = () => {
	const [item, setItem] = useState([]);

	const getApi = async () => {
		const response = await fetch('https://fakestoreapi.com/products');
		// console.log(response);
		setItem(await response.json());
	};

	useEffect(() => {
		getApi();
	}, []);

	return (
		<div>
			<Header />
			<div className="banner-container">
				<img src={banner} alt="banner" />
			</div>
			<div className="card-container">
				{item.map((element) => {
					return (
						<Card
							sx={{
								width: '300px',
								margin: '10px',
							}}
						>
							<CardActionArea>
								<CardMedia
									component="img"
									height="350"
									image={element.image}
									alt="bag"
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h6"
										component="div"
									>
										{element.title}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
