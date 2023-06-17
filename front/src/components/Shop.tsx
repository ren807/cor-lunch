import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Shop = (props: any) => {
	const { shop } = props;
	return (
		<Link to="shops/1">
			<Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
				<Image
					objectFit="cover"
					maxW={{ base: '100%', sm: '200px' }}
					src={shop.photo.pc.l}
				/>

				<Stack>
					<CardBody>
						<Heading size="md">{shop?.name}</Heading>
						<Text py="2">{shop?.address}</Text>
						{/* <Text py="1">
							{shop?.tags.map((tag: string) => {
								return <li>{tag}</li>;
							})}
						</Text> */}
					</CardBody>
				</Stack>
			</Card>
		</Link>
	);
};

export default Shop;
