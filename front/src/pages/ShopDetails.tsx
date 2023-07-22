import { Box, Center, Divider, Grid, Heading, Icon, Image, Stack, Text, } from '@chakra-ui/react';
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
			<Grid
				templateRows={{ base: "1fr 2fr", md: "1fr"}}
				templateColumns={{ base: "1fr", md: "1fr 1fr"}}
				mt={{ base: "8", md: "180"}}
				mb={8}
				mx="auto"
				gap={4}
				w={{ md: "45%"}}
			>
				<Box h={{base: "200px", md: "350px"}} w={{base: "100%", md: "380px"}} >
					<Image
						w="100%"
						h="100%"
						src={shopData?.photo}
						objectFit="cover"
						alt="画像が取得できませんでした"
						borderRadius="10px" 
					/>
				</Box>
				<Box w={{base: "100%", md: "500px"}} px={7}>
					<Stack spacing={4}>
						<Grid templateColumns="auto 1fr" alignItems="center" gap={2}>
							<Box p={2} >
								<Heading size={{base: "md", md: "xl"}} isTruncated>{shopData?.name}</Heading>
							</Box>
							<Icon w={6} h={6} cursor="pointer" color={like ? "red.400" : ""} as={like ? AiFillHeart : AiOutlineHeart} onClick={handleClickSwitchFlag}/>
						</Grid>
						<Text fontWeight="bold" isTruncated>
							<>
								{shopData?.genre}
								{shopData?.sub_genre.map((tag: string) => {
									return `、${tag}`;
								})}
							</>
						</Text>
						<Text fontSize="sm">{shopData?.address}</Text>
						<Divider maxWidth="400px" alignSelf="center" borderWidth={1} />
						<Text>🚶‍♂ 会社から：{shopData?.time_from_company}</Text>
						<Text>👥 推奨人数：{shopData?.Recommended_number_of_people}</Text>
						<Text>⏱ 営業時間：{shopData?.business_hours}</Text>
						<Text>😴 定休日：{shopData?.Regular_holiday}</Text>
						<Divider maxWidth="400px" alignSelf="center" borderWidth={1} />
					</Stack>
				</Box>
			</Grid>
		</>
	);
};

export default ShopDetails;
