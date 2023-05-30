import React from 'react';
import './cart.css';
import { BsArrowLeft } from 'react-icons/bs';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import Scrollbars from 'react-custom-scrollbars-2';
import Items from '../components/Items';

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
						<Scrollbars>
							<Items />
						</Scrollbars>
					</div>
				</div>
			</section>
		</>
	);
};

export default Cart;
