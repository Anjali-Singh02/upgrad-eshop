import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import React from 'react';

const ProductCard = ({ element }) => {
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
					<Typography gutterBottom variant="h6" component="div">
						{element.title}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default ProductCard;
