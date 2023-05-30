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
					height="400"
					image={element.imageURL}
					alt="bag"
				/>
				<CardContent>
					<Typography gutterBottom variant="h6" component="div">
						{element.name}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default ProductCard;
