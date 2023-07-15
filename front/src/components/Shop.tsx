import { Box, Card, CardBody, Flex, Grid, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { ShopDataType } from '../db/Shops';
import useLikes from '../hooks/useLikes';

const Shop = (props: ShopDataType) => {
	const { id, path, name, genre, photo, time_from_company} = props;

	// いいね機能
	const { like, handleClickSwitchFlag } = useLikes(props);

	return (
		<>
			<Box maxW="90vw" overflowX="hidden" p={0} m="auto" shadow="md">
				<Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={5}>
					<Link to={path} state={{ id: id }}>
						<Box h={{base: "200px", md: "360px"}} w="100%" overflow="hidden">
							<Image
								w="100%"
								h="100%"
								src={photo}
								objectFit="cover"
								alt="画像が取得できませんでした"
							/>
						</Box>
					</Link>
					<Grid templateColumns="1fr 6fr 1fr" alignItems="center">
						<Box py={5} px={{base: 4, md: 10}} >
							<Flex minWidth='max-content' justifyContent="left" alignItems='center' mx="auto">
								<Box p='2' >
									<Link to={path} state={{ id: id }}>
										<Heading size="md" isTruncated>{name}</Heading>
									</Link>
								</Box>
							<Icon w={6} h={6} cursor="pointer" color={like ? "red.400" : ""} as={like ? AiFillHeart : AiOutlineHeart} onClick={handleClickSwitchFlag}/>
							</Flex>
							<Link to={path} state={{ id: id }}>
								<Text py="2">🚶‍♂ 会社から：{time_from_company}</Text>
								<Text py="1">🍴 ジャンル：<Text as="span" fontWeight="bold">{genre}</Text></Text>
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Shop;
