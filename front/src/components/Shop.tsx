import { Box, Card, CardBody, Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ShopDataType } from '../db/Shops';

const Shop = (props: ShopDataType) => {
	const { path, name, address, genre, sub_genre} = props;
	return (
		<Link to={path}>
			<Card 
				direction={{ base: 'column', sm: 'row' }} 
				overflow="hidden" 
				variant="outline"
			>
				<Image
					objectFit="cover"
					width={{ base: '100%', sm: '200px' }}
					height={{ base: '200px', sm: '200px' }}
				/>
				<Stack>
					<CardBody>
						<Flex minWidth='max-content' alignItems='center' gap='2' >
							<Box p='2'>
								<Heading size="md">{name}</Heading>
							</Box>
							<Link to="likes">
								<Icon w={6} h={6} color="red.500" as={AiOutlineHeart} />
							</Link>
						</Flex>
						<Text py="2">{address}</Text>
						<Text py="2">{genre}</Text>
						<Flex wrap="wrap" py="2">
							{sub_genre.map((sub_g: string, index: number) => (
								<Text px="2" key={index}>{sub_g} </Text>
							))}
						</Flex>
					</CardBody>
				</Stack>
			</Card>
		</Link>
	);
};

export default Shop;
