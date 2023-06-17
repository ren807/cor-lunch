import { Box, Card, CardBody, Flex, Heading, Icon, Image, Spacer, Stack, Text } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
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
						<Flex minWidth='max-content' alignItems='center' gap='2' m="2">
							<Box p='2'>
								<Heading size="md">{shop.name}</Heading>
							</Box>
							<Link to="likes">
								<Icon w={6} h={6} color="red.500" as={AiOutlineHeart} />
							</Link>
						</Flex>
						<Text py="2">{shop.access}</Text>
						<Text py="2">{shop.genre.name}</Text>
					</CardBody>
				</Stack>
			</Card>
		</Link>
	);
};

export default Shop;
