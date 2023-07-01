import { useLocation } from 'react-router-dom';
import { Box, Heading, SimpleGrid, Stack, WrapItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import useGetShopsGenre from '../hooks/useGetShopsGenre';
import Shop from '../components/Shop';
import Genre from '../components/Genre';

type State = {
	genre: string;
};

const ShopGenre = () => {
	// ジャンルの値を取得
	const location = useLocation();
	const { genre } = location.state as State;
	
	// ジャンル検索
	const { getShopsData, shopsData } = useGetShopsGenre(genre);
	useEffect(() => getShopsData(), [genre]);

	return (
		<>
			<Box mx={{ base: 5, md: 20}} pb={5}>
				<Stack>
					{/* カテゴリ一覧 */}
					<Box my={4}>
						<Genre />
					</Box>
					{/* おすすめ一覧 */}
					<Box mb={4} width="100%">
						<Heading as="h3" size="lg" mt={2} mb={5} textAlign={{ base: "center", md: "left" }}>
							青葉台周辺の{genre} 😋
						</Heading>
						<SimpleGrid columns={{ base: 1, md: 4 }} spacing="30px" >
							{shopsData?.map((shop, index) => (
								<WrapItem key={index} m="auto">
									<Box w="340px" minHeight="260px" borderRadius="10px" shadow="md" >
										<Shop {...shop}/>
									</Box>
								</WrapItem>
							))}
						</SimpleGrid>
					</Box>
				</Stack>
			</Box>
		</>
	);
};

export default ShopGenre;