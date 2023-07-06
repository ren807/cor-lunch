import { Box, Divider, Flex, Heading, Icon, Image, Text, } from '@chakra-ui/react';
import { useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import useGetShopData from '../hooks/useGetShopData';
import useLikes from '../hooks/useLikes';

type ShopParams = {
	shopId: string;
};

const ShopDetails = () => {

	// URLから値を引っ張ってくる
	const { shopId } = useParams<ShopParams>();
	const navigate = useNavigate(); 
	const { getShopData, shopData, error } = useGetShopData();

	useEffect(() => {
		if (shopId !== undefined) {
			const id = parseInt(shopId);
			if (!isNaN(id)) {
				getShopData(id)
			}
		}
	}, [shopId]);

	useEffect(() => {
		if (error) {
			navigate('/');
		}
	}, [error, navigate]);

	// いいね機能
	const { like, handleClickSwitchFlag } = useLikes(shopData);

	return (
		<>
			<Flex height={{base: "100%", md: "80vh"}} justifyContent="center" mt={8}>
				<Flex direction={{base: "column", md: "row"}} alignItems="center" >
					<Box >
						<Image
							boxSize={{base: "95%", md: "500px"}}
							src={shopData?.photo}
							objectFit="cover"
							alt="画像が取得できませんでした"
							mx={{base: "auto", md: "0"}}
						/>
					</Box>
					<Box width={{base: "100%", md: "500px"}} py={4} marginLeft={{base: "0", md: "10"}}>
						<Flex minWidth='max-content' justifyContent={{base: "center", md: "left"}} alignItems='center' mx="auto">
							<Box p='2' >
								<Heading size={{base: "md", md: "xl"}} isTruncated>{shopData?.name}</Heading>
							</Box>
							<Icon w={6} h={6} cursor="pointer" color={like ? "red.400" : ""} as={like ? AiFillHeart : AiOutlineHeart} onClick={handleClickSwitchFlag}/>
						</Flex>
						<Box mx={5}>
							<Text py="2">
									🍴
									<Text as="span" fontWeight="bold">
										<>
											{shopData?.genre}
											{shopData?.sub_genre.map((tag: string) => {
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
							{/* <Text>
								ひとこと<br />
								{shopData?.one_word}
							</Text> */}
						</Box>
					</Box>
				</Flex>
			</Flex>
		</>
	);
};

export default ShopDetails;
