import Navbar from '../Navbar';

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<div style={{ textAlign: 'center', width: '100%', margin: 'auto' }}>
				{children}
			</div>
		</div>
	);
};

export default Layout;
