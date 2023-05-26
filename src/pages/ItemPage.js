import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './itempage.css';
import { Button } from '@mui/material';
import { IconContext } from 'react-icons';
import { BsHeart } from 'react-icons/bs';
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
		<div className="productCard card flex-grow flex flex-col">
			<div className="flex justify-center flex-wrap datas-start my-12">
				<div className="imageCont rounded-md m-3 flex flex-col datas-end">
					<IconContext.Provider
						value={{
							color: 'white',
							size: '.5em',
							className: 'global-class-name flex flex-end',
						}}
					>
						<BsHeart />
					</IconContext.Provider>
					<img
						className="aspect-square"
						src={data.image}
						alt={'Unsupported image.'}
						height="500"
						width="500"
					/>
				</div>
				<div className=" ml-24 px-6 py-2 max-w-lg w-full">
					<div className="flex flex-col p-2">
						<h1 className="text-3xl font-fjalla">{data.title}</h1>
						<h1 className="text-lg font-fjalla">
							{data.description}
						</h1>
					</div>
					<div className="flex flex-col">
						<h1 className="uppercase text-3xl pb-4">
							specifications
						</h1>
						<div className="grid grid-cols-2 gap-4">
							<div className="">
								<h1 className="text-lg font-fjalla text-terbg">
									Category
								</h1>
								<h1 className="text-lg font-fjalla">
									{data.category}
								</h1>
							</div>
							<div className="">
								<h1 className="text-lg font-fjalla text-terbg">
									Rating
								</h1>
								<h1 className="text-lg font-fjalla">
									{/* {data.rating.rate} of {data.rating.count} */}
								</h1>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<h2>Price - {data.price}</h2>
					</div>
					<br />
					<div className="flex ">
						<Button sx={{ margin: '10px' }} variant="contained">
							Add To Cart
						</Button>
						<Button sx={{ margin: '10px' }} variant="contained">
							Buy Now
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemPage;
