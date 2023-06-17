import {
	Box,
	Center,
	Heading,
	Image,
	SimpleGrid,
	Stack,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import Shop from '../components/Shop';
import useGetShopsData from '../hooks/useGetShopsData';

const Top = () => {
	const { getShopsData, shops } = useGetShopsData();
	useEffect(() => getShopsData(), []);

	return (
		<>
			<Box p="20px">
				<hr />
				<Stack>
					<Box my={4}>
						<Heading as="h3" size="lg" m={2}>カテゴリ別に検索</Heading>
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
					</Box>
					{/* おすすめ一覧 */}
					<Box m={4}>
						<Heading as="h3" size="lg" m={2}>本日のオススメの店舗</Heading>
						<SimpleGrid columns={2} spacing={10} >
							{shops.map((shop, index) => (
								<Box key={index}>
									<Shop shop={shop}/>
								</Box>
							))}
						</SimpleGrid>
					</Box>
				</Stack>
			</Box>
		</>
	);
};

export default Top;
