import { Box, Card, CardBody, Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ShopDataType } from '../db/Shops';
import useLikes from '../hooks/useLikes';

const Shop = (props: ShopDataType) => {
	const { path, name, address, genre, sub_genre, photo} = props;

	// いいね機能
	const { like, handleClickSwitchFlag } = useLikes(props);

	return (
		<>
			<Card 
				direction={{ base: 'column', sm: 'row' }}
				overflow="hidden" 
				variant="outline"
			>
				<Link to={path}>
					<Image
						objectFit="cover"
						width={{ base: '100%', sm: '200px' }}
						height={{ base: '200px', sm: '200px' }}
						src={photo}
						alt="画像が取得できませんでした"
					/>
				</Link>
				<Stack>
					<CardBody>
						<Flex minWidth='max-content' alignItems='center' gap='2' >
							<Box p='2'>
								<Link to={path}>
									<Heading size="md">{name}</Heading>
								</Link>
							</Box>
							<Icon w={6} h={6} cursor="pointer" color={like ? "red.400" : ""} as={like ? AiFillHeart : AiOutlineHeart} onClick={handleClickSwitchFlag}/>
						</Flex>
						<Link to={path}>
							<Text py="2">{address}</Text>
							<Text py="2">{genre}</Text>
							<Flex wrap="wrap" py="2">
								{sub_genre.map((sub_g: string, index: number) => (
									<Text px="2" key={index}>{sub_g} </Text>
								))}
							</Flex>
						</Link>
					</CardBody>
				</Stack>
			</Card>
		</>
	);
};

export default Shop;
