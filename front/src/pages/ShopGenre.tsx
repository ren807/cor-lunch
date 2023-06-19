import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react';
import Shop from '../components/Shop';
import useGetShopsGenre from '../hooks/useGetShopsGenre';

const ShopGenre = () => {
	const { getShopsData, shops } = useGetShopsGenre();
	useEffect(() => getShopsData(), []);
	return (
		<>
			{/* ジャンル検索一覧 */}
			<Box m={4}>
				<Heading as="h3" size="lg" m={2}>青葉台タワー周辺の中華</Heading>
				<SimpleGrid columns={2} spacing={10} >
					{shops.map((shop, index) => (
						<Box key={index}>
							{/* <Shop shop={shop}/> */}
						</Box>
					))}
				</SimpleGrid>
			</Box>
		</>
	);
};

export default ShopGenre;