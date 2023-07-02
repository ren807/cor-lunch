import { Box, CardBody, Divider, Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import useGetShopData from '../hooks/useGetShopData';

const ShopDetails = () => {
	const { getShopData, shopData } = useGetShopData();
	useEffect(() => getShopData(0), []);

	return (
		<>
			<Flex height="80vh" justifyContent="center" alignItems="center">
				<Flex direction="row">
					<Box marginRight={10}>
						<Image
							boxSize="500px"
							src={shopData?.photo}
							objectFit="cover"
							alt="画像が取得できませんでした"
						/>
					</Box>
					<Box width="500px">
						<Flex minWidth='max-content' alignItems='center'>
							<Box p='2'>
								<Heading size="xl" isTruncated>{shopData?.name}</Heading>
							</Box>
							{/* <Icon w={6} h={6} cursor="pointer" color={like ? "red.400" : ""} as={like ? AiFillHeart : AiOutlineHeart} onClick={handleClickSwitchFlag}/> */}
						</Flex>
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
						<Text py="2">🏢 {shopData?.address}</Text>
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
				</Flex>
			</Flex>
		</>
	);
};

export default ShopDetails;
