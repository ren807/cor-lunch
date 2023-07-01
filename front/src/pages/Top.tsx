import {
	Box,
	Grid,
	Heading,
	SimpleGrid,
	Stack,
	Wrap,
	WrapItem,
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
			<Box mx={{ base: 5, md: 20}} pb={5}>
				<Stack>
					{/* カテゴリ一覧 */}
					<Box my={4}>
						<Genre />
					</Box>
					{/* おすすめ一覧 */}
					<Box mb={4} width="100%">
						<Heading as="h3" size="lg" my={2} textAlign={{ base: "center", md: "left" }}>
							本日のオススメの店舗 🎉
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

export default Top;
