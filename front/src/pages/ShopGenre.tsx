import { useNavigate, useParams } from 'react-router-dom';
import { Box, Heading, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import useGetShopsGenre from '../hooks/useGetShopsGenre';
import Shop from '../components/Shop';
import Genre from '../components/Genre';

type GenreParams = {
	genreName: string;
};

const ShopGenre = () => {
	const navigate = useNavigate();
	const { genreName } = useParams<GenreParams>();
	const { getShopsData, shopsData } = useGetShopsGenre(genreName);

	useEffect(() => { 
		if (genreName !== undefined) {
			getShopsData();
		} else {
			navigate('/');
		}
	}, [genreName, getShopsData, navigate]);

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
							青葉台周辺の{shopsData?.[0].genre} 😋
						</Heading>
						{/* 店舗カード */}
						<Wrap spacing="30px" >
							{shopsData?.map((shop, index) => (
								<WrapItem key={index} m="auto" shadow="md" >
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

export default ShopGenre;