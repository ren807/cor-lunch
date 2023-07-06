import {
	Box,
	Heading,
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
						<Heading as="h3" size="lg" mt={2} mb={5} textAlign={{ base: "center", md: "left" }}>
							本日のオススメの店舗 🎉
						</Heading>
						{/* 店舗カード */}
						<Wrap spacing="30px">
							{shopsData?.map((shop, index) => (
								<WrapItem key={index} m="auto" shadow="md">
									<Shop {...shop}/>
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
