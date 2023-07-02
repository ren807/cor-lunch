import { Box, Divider, Flex, Heading, Image, Text, } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useGetShopData from '../hooks/useGetShopData';

type State = {
	id: number;
};

const ShopDetails = () => {
	// 　idを取得
	const location = useLocation();
	const { id } = location.state as State;

	const { getShopData, shopData } = useGetShopData();
	useEffect(() => getShopData(id), []);

	return (
		<>
			<Flex height={{base: "100%", md: "80vh"}} justifyContent="center" alignItems="center" mt={8}>
				<Flex direction={{base: "column", md: "row"}} >
					<Box >
						<Image
							boxSize={{base: "85%", md: "500px"}}
							src={shopData?.photo}
							objectFit="cover"
							alt="画像が取得できませんでした"
							mx={{base: "auto", md: "0"}}
						/>
					</Box>
					<Box width={{base: "100%", md: "500px"}} py={4} marginLeft={{base: "0", md: "10"}}>
						<Flex minWidth='max-content' alignItems='center'>
							<Box p='2' mx={{base: "auto", md: "0"}}>
								<Heading size={{base: "md", md: "xl"}} isTruncated>{shopData?.name}</Heading>
							</Box>
							{/* <Icon w={6} h={6} cursor="pointer" color={like ? "red.400" : ""} as={like ? AiFillHeart : AiOutlineHeart} onClick={handleClickSwitchFlag}/> */}
						</Flex>
						<Box mx={5}>
							<Text py="2">
									🍴
									<Text as="span" fontWeight="bold">
										<>
											{shopData?.genre}
											{shopData?.sub_genre.map((tag: string, index) => {
												return `、${tag}`;
											})}
										</>
									</Text>
							</Text>
							<Text py="2" fontSize="sm">🏢 {shopData?.address}</Text>
							<Divider maxWidth="400px" alignSelf="center" borderWidth="1px" my={5} />
							<Text py="2">🚶‍♂ 会社から：{shopData?.time_from_company}</Text>
							<Text py="2">👥 推奨人数：{shopData?.Recommended_number_of_people}</Text>
							<Text py="2">⏱ 営業時間：{shopData?.business_hours}</Text>
							<Text py="2">😴 定休日：{shopData?.Regular_holiday}</Text>
							<Divider maxWidth="400px" alignSelf="center" borderWidth="1px" my={5} />
							<Text>
								ひとこと<br />
								{shopData?.one_word}
							</Text>
						</Box>
					</Box>
				</Flex>
			</Flex>
		</>
	);
};

export default ShopDetails;
