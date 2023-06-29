import { useLocation } from 'react-router-dom';
import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
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
			<Box p={10} >
				<Stack>
					{/* カテゴリ一覧 */}
					<Box my={4}>
						<Genre currentGenre={genre} />
					</Box>
					{/* ジャンル検索一覧 */}
					<Box m={4}>
						<Heading as="h3" size="lg" m={2}>青葉台タワー周辺の{genre}</Heading>
						<SimpleGrid columns={2} spacing={10} mt={4}>
							{shopsData?.map((shop, index) => (
								<Box key={index}>
									<Shop {...shop}/>
								</Box>
							))}
						</SimpleGrid>
					</Box>
				</Stack>
			</Box>
		</>
	);
};

export default ShopGenre;