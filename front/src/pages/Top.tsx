import {
	Box,
	Heading,
	SimpleGrid,
	Stack,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import Genre from '../components/Genre';

import Shop from '../components/Shop';
import useGetShopsData from '../hooks/useGetShopsData';

const Top = () => {
	const { getShopsData, shopsData } = useGetShopsData();
	useEffect(() => getShopsData(), []);

	return (
		<>
			<Box p={10}>
				<Stack>
					{/* カテゴリ一覧 */}
					<Box my={4}>
						<Genre />
					</Box>
					{/* おすすめ一覧 */}
					<Box m={4}>
						<Heading as="h3" size="lg" m={2}>本日のオススメの店舗</Heading>
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

export default Top;
