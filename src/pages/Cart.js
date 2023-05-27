import React from 'react';
import './cart.css';
import { BsArrowLeft } from 'react-icons/bs';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

const Cart = () => {
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
					<p className="total-products">5</p>
				</div>
			</header>

			<section className="main-cart-section">
				<h1 className="cart-heading">shopping Cart</h1>
				<p className="total-items">
					you have <span className="total-items-count">5 </span> items
					in shopping cart
				</p>
				<div className="cart-items">
					<div className="cart-items-container">
						<div className="items-info">
							<div className="product-img">
								<img
									src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m20-m205f-1.jpg"
									alt="image"
								/>
							</div>

							<div className="title">
								<h2>Samsung</h2>
								<p>Red color</p>
							</div>
							<div className="add-quantity">
								<Button className="minus-btn">
									<AiOutlineMinus />
								</Button>
								<input
									type="text"
									className="textField"
									placeholder="3"
								/>
								<Button className="plus-btn">
									<AiOutlinePlus />
								</Button>
							</div>
							<div className="price">
								<h3>2000Rs</h3>
							</div>
							<div className="remove-item">
								<Button>
									<IconContext.Provider
										value={{ color: 'red', size: '1.3em' }}
									>
										<FaTrash />
									</IconContext.Provider>
								</Button>
							</div>
						</div>
						<hr />
						<div className="items-info">
							<div className="product-img">
								<img
									src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m20-m205f-1.jpg"
									alt="image"
								/>
							</div>

							<div className="title">
								<h2>Samsung</h2>
								<p>Red color</p>
							</div>
							<div className="add-quantity">
								<Button className="minus-btn">
									<AiOutlineMinus />
								</Button>
								<input
									type="text"
									className="textField"
									placeholder="3"
								/>
								<Button className="plus-btn">
									<AiOutlinePlus />
								</Button>
							</div>
							<div className="price">
								<h3>2000Rs</h3>
							</div>
							<div className="remove-item">
								<Button>
									<IconContext.Provider
										value={{ color: 'red', size: '1.3em' }}
									>
										<FaTrash />
									</IconContext.Provider>
								</Button>
							</div>
						</div>
						<hr />
						<div className="items-info">
							<div className="product-img">
								<img
									src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m20-m205f-1.jpg"
									alt="image"
								/>
							</div>

							<div className="title">
								<h2>Samsung</h2>
								<p>Red color</p>
							</div>
							<div className="add-quantity">
								<Button className="minus-btn">
									<AiOutlineMinus />
								</Button>
								<input
									type="text"
									className="textField"
									placeholder="3"
								/>
								<Button className="plus-btn">
									<AiOutlinePlus />
								</Button>
							</div>
							<div className="price">
								<h3>2000Rs</h3>
							</div>
							<div className="remove-item">
								<Button>
									<IconContext.Provider
										value={{ color: 'red', size: '1.3em' }}
									>
										<FaTrash />
									</IconContext.Provider>
								</Button>
							</div>
						</div>
						<hr />
						<div className="items-info">
							<div className="product-img">
								<img
									src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m20-m205f-1.jpg"
									alt="image"
								/>
							</div>

							<div className="title">
								<h2>Samsung</h2>
								<p>Red color</p>
							</div>
							<div className="add-quantity">
								<Button className="minus-btn">
									<AiOutlineMinus />
								</Button>
								<input
									type="text"
									className="textField"
									placeholder="3"
								/>
								<Button className="plus-btn">
									<AiOutlinePlus />
								</Button>
							</div>
							<div className="price">
								<h3>2000Rs</h3>
							</div>
							<div className="remove-item">
								<Button>
									<IconContext.Provider
										value={{ color: 'red', size: '1.3em' }}
									>
										<FaTrash />
									</IconContext.Provider>
								</Button>
							</div>
						</div>
						<hr />
					</div>
				</div>
			</section>
		</>
	);
};

export default Cart;
