import {
	Box,
	Heading,
	SimpleGrid,
	Stack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Shop from '../components/Shop';
import { ShopDataType } from '../db/Shops';

const Like = () => {

	const [ shopsDate, setShopsData ] = useState<Array<ShopDataType> | null>(null);

	useEffect(() => {
		const storedLikes = localStorage.getItem('likes');
		const likesArray = storedLikes ? JSON.parse(storedLikes) : [];
		setShopsData(likesArray);
	}, []);

	return (
		<>
			<Box p={10}>
				<Stack>
					{/* お気に入り一覧 */}
					<Box m={4}>
						<Heading as="h3" size="lg" m={2}>お気に入り店舗</Heading>
						<SimpleGrid columns={2} spacing={10} mt={4}>
							{shopsDate?.map((shop, index) => (
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

export default Like;
