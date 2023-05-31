import React, { useState } from 'react';
import './cart.css';
import { BsArrowLeft } from 'react-icons/bs';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import Scrollbars from 'react-custom-scrollbars-2';
import { Button } from '@mui/material';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Cart = () => {
	// const [count, setCount] = useState(1);
	const cart = JSON.parse(localStorage.getItem('cart')) || [];
	if (!cart.length) <div>Cart is Empty</div>;

	const handleDecre = (id) => {};
	const handleIncre = (id) => {};

	const handleDelete = () => {};
	return (
		<>
			<header className="sub-header-cont">
				<div className="continue-shopping">
					<Link to="/products">
						<p>
							<BsArrowLeft /> Continue shopping
						</p>
					</Link>
				</div>

				<div className="icon-cart">
					<IconContext.Provider
						value={{
							className: 'global-class-name icon-style',
							size: '1.5em',
							color: '#1a759f',
						}}
					>
						<FaShoppingCart />
					</IconContext.Provider>
					<p className="total-products">{cart.length}</p>
				</div>
			</header>

			<section className="main-cart-section">
				<h1 className="cart-heading">shopping Cart</h1>
				<p className="total-items">
					you have{' '}
					<span className="total-items-count">{cart.length} </span>{' '}
					items in shopping cart
				</p>
				<div className="cart-items">
					<div className="cart-items-container">
						<Scrollbars>
							{cart.map((elem) => {
								const { name, imageURL, category, price } =
									elem;

								return (
									<div className="items-info">
										<div className="product-img">
											<img src={imageURL} alt="image" />
										</div>

										<div className="title">
											<h2>{name}</h2>
											<p>{category}</p>
										</div>
										<div className="add-quantity">
											<Button
												className="minus-btn"
												onClick={() =>
													handleDecre(cart?.id)
												}
											>
												<AiOutlineMinus />
											</Button>
											<input
												type="text"
												className="textField"
												value={cart.quantity}
											/>
											<Button
												className="plus-btn"
												onClick={() => {
													handleIncre(cart?.id);
												}}
											>
												<AiOutlinePlus />
											</Button>
										</div>
										<div className="price">
											<h3>Rs {price}</h3>
										</div>
										<div className="remove-item">
											<Button onClick={handleDelete}>
												<IconContext.Provider
													value={{
														color: 'red',
														size: '1.3em',
													}}
												>
													<FaTrash />
												</IconContext.Provider>
											</Button>
										</div>
									</div>
								);
							})}
							<hr />
						</Scrollbars>
					</div>
				</div>
			</section>
		</>
	);
};

export default Cart;
