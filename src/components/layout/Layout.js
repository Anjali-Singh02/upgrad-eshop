import React, { Children } from 'react';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
			{/* <Footer/> */}
		</div>
	);
};

export default Layout;
