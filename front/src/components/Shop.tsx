import { Box, Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Shop = (props: any) => {
	const { shop } = props;
	return (
		<Link to="shops/1">
			<Card 
				direction={{ base: 'column', sm: 'row' }} 
				overflow="hidden" 
				variant="outline"
			>
				<Image
					objectFit="cover"
					width={{ base: '100%', sm: '200px' }}
					height={{ base: '200px', sm: '200px' }}
					src={shop.photo.pc.l}
				/>
				<Stack>
					<CardBody>
						<Heading size="md">{shop.name}</Heading>
						<Text py="2">{shop.access}</Text>
						<Text py="2">{shop.genre.name}</Text>
					</CardBody>
				</Stack>
			</Card>
		</Link>
	);
};

export default Shop;
