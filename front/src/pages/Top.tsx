import {
	Box,
	Center,
	Heading,
	SimpleGrid,
	Stack,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Shop from '../components/Shop';
import useGetShopData from '../hooks/useGetShopData';

const Top = () => {
	const { getShopData, shopData } = useGetShopData();
	useEffect(() => getShopData(0), []);

	const navigate = useNavigate();
	const onClickSearchButton = () => {
		navigate('shops');
	};

	return (
		<Box p="20px">
			<Stack>
				<Heading as="h2">これはTOPページです！</Heading>
				<hr />
				<Heading as="h3" size="lg">カテゴリ別に検索</Heading>
				<SimpleGrid columns={[2, null, 5]} spacing='40px'>
					<Center bg='cor.200' height='80px'>
						中華
					</Center>
					<Center bg='cor.200' height='80px'>
						麺類
					</Center>
					<Center bg='cor.200' height='80px'>
						定食
					</Center>
					<Center bg='cor.200' height='80px'>
						洋食
					</Center>
					<Center bg='cor.200' height='80px'>
						アメリカ料理
					</Center>
				</SimpleGrid>
				<Heading as="h3" size="lg">本日のオススメの店舗</Heading>
				<SimpleGrid columns={2} spacing={10} >
					<Box>
						<Shop shopData={shopData}/>
					</Box>
					<Box>
						<Shop shopData={shopData}/>
					</Box>
					<Box>
						<Shop shopData={shopData}/>
					</Box>
					<Box>
						<Shop shopData={shopData}/>
					</Box>
					<Box>
						<Shop shopData={shopData}/>
					</Box>
					<Box>
						<Shop shopData={shopData}/>
					</Box>
					<Box>
						<Shop shopData={shopData}/>
					</Box>
					<Box>
						<Shop shopData={shopData}/>
					</Box>
					<Box>
						<Shop shopData={shopData}/>
					</Box>
					<Box>
						<Shop shopData={shopData}/>
					</Box>
				</SimpleGrid>
			</Stack>
		</Box>
	);
};

export default Top;
