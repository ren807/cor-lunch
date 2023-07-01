import { Box, Card, CardBody, Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { ShopDataType } from '../db/Shops';
import useLikes from '../hooks/useLikes';

const Shop = (props: ShopDataType) => {
	const { path, name, genre, photo, time_from_company} = props;

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
						<Link to={path}>
							<Image
								boxSize="320px"
								src={photo}
								objectFit="cover"
								alt="画像が取得できませんでした"
								m="auto"
							/>
						</Link>
					</Box>
					<Stack>
						<CardBody>
							<Flex minWidth='max-content' alignItems='center' gap='5' >
								<Box p='2'>
									<Link to={path}>
										<Heading size="md" isTruncated>{name}</Heading>
									</Link>
								</Box>
								<Icon w={6} h={6} cursor="pointer" color={like ? "red.400" : ""} as={like ? AiFillHeart : AiOutlineHeart} onClick={handleClickSwitchFlag}/>
							</Flex>
							<Link to={path}>
								<Text py="2">会社から徒歩：{time_from_company}</Text>
								<Text py="2">ジャンル：{genre}</Text>
							</Link>
						</CardBody>
					</Stack>
				</Stack>
			</Card>
		</>
	);
};

export default Shop;
