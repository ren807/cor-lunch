import { Box, Card, CardBody, Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
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
			<Card 
				direction={{ base: 'column', sm: 'row' }}
				overflow="hidden" 
				variant="outline"
			>
				<Stack>
					<Box >
						<Link to={path} state={{ id: id }}>
							<Image
								boxSize="360px"
								src={photo}
								objectFit="cover"
								alt="画像が取得できませんでした"
								m="auto"
							/>
						</Link>
					</Box>
					<Stack>
						<CardBody py={5} px={10}>
							<Flex minWidth='max-content' alignItems='center' pb={3}>
								<Box width="250px">
									<Link to={path} state={{ id: path }}>
										<Heading size="md" isTruncated>{name}</Heading>
									</Link>
								</Box>
								<Box>
									<Icon w={6} h={6} cursor="pointer" color={like ? "red.400" : ""} as={like ? AiFillHeart : AiOutlineHeart} onClick={handleClickSwitchFlag}/>
								</Box>
							</Flex>
							<Link to={path} state={{ id: path }}>
								<Text py="2">🚶‍♂ 会社から：{time_from_company}</Text>
								<Text py="1">🍴 ジャンル：<Text as="span" fontWeight="bold">{genre}</Text></Text>
							</Link>
						</CardBody>
					</Stack>
				</Stack>
			</Card>
		</>
	);
};

export default Shop;
