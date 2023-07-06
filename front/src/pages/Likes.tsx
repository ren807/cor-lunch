import {
	Box,
	Button,
	Flex,
	Heading,
	Stack,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Shop from '../components/Shop';
import { ShopDataType } from '../db/Shops';

const Like = () => {

	const [ shopsData, setShopsData ] = useState<Array<ShopDataType> | null>(null);

	useEffect(() => {
		const storedLikes = localStorage.getItem('likes');
		const likesArray = storedLikes ? JSON.parse(storedLikes) : [];
		setShopsData(likesArray);
	}, []);

	return (
		<>
			{shopsData != null && shopsData.length > 0 ? (
				<Box mx={{ base: 5, md: 20}} pb={5}>
					<Stack>
						{/* おすすめ一覧 */}
						<Box my={4} width="100%">
							<Heading as="h3" size="lg" mt={5} mb={10} textAlign={{ base: "center", md: "left" }}>
								お気に入り店舗 ❤
							</Heading>
							{/* 店舗カード */}
							<Wrap spacing="30px" >
								{shopsData?.map((shop, index) => (
									<WrapItem key={index} m="auto" shadow="md">
										<Shop {...shop}/>
									</WrapItem>
								))}
							</Wrap>
						</Box>
					</Stack>
				</Box>
			) : (
				<>
					<Flex
						width="100vw"
						height="80vh"
						justifyContent="center"
						alignItems="center"
					>
						<Stack>
							<Text fontSize={{base: "md", md: "xl"}} fontWeight="bold">
								いいねを押してお気に入りリストを作ろう！🔥
							</Text>
							<Box display="flex" justifyContent="center" alignItems="center">
								<Link to="/">
									<Button color="black" _hover={{ bg: 'rgba(248, 157, 5, 0.8)' }}>お店を探しに行く</Button>
								</Link>
							</Box>
						</Stack>
					</Flex>
				</>
			)}
		</>
	);
};

export default Like;
