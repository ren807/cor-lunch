import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Shop = (props: any) => {
	const { shopData } = props;
	return (
		<Link to="shops/1">
			<Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
				<Image
					objectFit="cover"
					maxW={{ base: '100%', sm: '200px' }}
					src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
					alt="Caffe Latte"
				/>

				<Stack>
					<CardBody>
						<Heading size="md">{shopData?.name}</Heading>
						<Text py="2">{shopData?.address}</Text>
						<Text py="1">
							{shopData?.tags.map((tag: string) => {
								return <li>{tag}</li>;
							})}
						</Text>
					</CardBody>
				</Stack>
			</Card>
		</Link>
	);
};

export default Shop;
