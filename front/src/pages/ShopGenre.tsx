import { useLocation } from 'react-router-dom';
import { Box, Heading, Stack, Wrap, WrapItem } from '@chakra-ui/react';
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
						<Heading as="h3" size="lg" my={2} textAlign={{ base: "center", md: "left" }}>
						青葉台周辺の{genre} 😋
						</Heading>
						<Wrap p={4} display="flex" justifyContent="center" spacing="80px" flexDirection="row" alignItems="flex-start">
							{shopsData?.map((shop, index) => (
								<WrapItem key={index} m="auto">
									<Box w="320px" minHeight="260px" borderRadius="10px" shadow="md" >
										<Shop {...shop}/>
									</Box>
								</WrapItem>
							))}
						</Wrap>
					</Box>
				</Stack>
			</Box>
		</>
	);
};

export default ShopGenre;