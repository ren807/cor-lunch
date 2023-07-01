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
	useEffect(() => getShopsData(), [getShopsData]);

	return (
		<>
			<Box px={7} pb={5}>
				<Stack>
					{/* カテゴリ一覧 */}
					<Box my={4}>
						<Genre />
					</Box>
					{/* おすすめ一覧 */}
					<Box m={4}>
						<Heading as="h3" size="lg" m={2}>本日のオススメの店舗 🎉</Heading>
						<SimpleGrid columns={[1,null,2]} spacing={10} my={4}>
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
