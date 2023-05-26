import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './itempage.css';
import { Button } from '@mui/material';
import { IconContext } from 'react-icons';
import { BsArrowLeftCircle, BsHeart } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
// "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating": {
// "rate": 3.9,
// "count": 120
// }

const ItemPage = ({ element }) => {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState({});
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`, {})
			.then((res) => res.json())
			.then((response) => {
				console.log(response);
				setData(response);
				setIsLoading(false);
				console.log(`https://fakestoreapi.com/products/${id}`);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<div className="back">
				<Link to="/products">
					<BsArrowLeftCircle />
				</Link>
			</div>
			<div className="productCard ">
				<div className=" card  ">
					<div className="image-container">
						<img
							className="aspect-square"
							src={data.image}
							alt={'Unsupported image.'}
							height="500"
							width="500"
						/>
						<IconContext.Provider
							value={{
								color: '#000',
								size: '1em',
								className: 'global-class-name heart-icon',
							}}
						>
							<BsHeart />
						</IconContext.Provider>
					</div>
					<div className=" details-cont">
						<div className="heading-cont">
							<h1 className="title">{data.title}</h1>
							<h1 className="desc">{data.description}</h1>
						</div>
						<div className="specifications-cont">
							<div className="grid-cont">
								<div className="category-cont">
									<p>Category</p>
									<hr />
									<h5>{data.category}</h5>
								</div>

								<div className="rating-cont">
									<p>Rating</p>
									<hr />
									<h5>
										{/* {data.rating.rate} of {data.rating.count} */}
									</h5>
								</div>
							</div>
						</div>
						<div className="price-cont">
							<h2>Price - $ {data.price}</h2>
						</div>
						<br />
						<div className=" button-cont btn">
							<Button
								className="button add-btn"
								sx={{ margin: '10px' }}
								variant="contained"
							>
								Add To Cart
							</Button>
							<Button
								className="button buy-btn"
								sx={{ margin: '10px' }}
								variant="contained"
							>
								Buy Now
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemPage;
