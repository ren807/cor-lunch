import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react';
import Shop from '../components/Shop';
import useGetShopsData from '../hooks/useGetShopsData';

// const ShopSearch = () => {
// 	const { getShopsData, shops } = useGetShopsData();
// 	useEffect(() => getShopsData(), []);
// 	return (
// 		<>
// 			{/* おすすめ一覧 */}
// 			<Box m={4}>
// 				<Heading as="h3" size="lg" m={2}>本日のオススメの店舗</Heading>
// 					<SimpleGrid columns={2} spacing={10} >
// 						{shops.map((shop, index) => (
// 							<Box key={index}>
// 								<Shop shop={shop}/>
// 							</Box>
// 						))}
// 					</SimpleGrid>
// 			</Box>
// 		</>
// 	);
// };

// export default ShopSearch;
