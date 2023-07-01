import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useGetGenre from "../hooks/useGetGenre";

const Genre = () => {
	// 現在のパスを取得
	const location = useLocation();
	const [currentGenre, setCurrentGenre] = useState(location.pathname);

	const { getGenresData, genresData } = useGetGenre();
	useEffect(() => getGenresData(), []);

	return (
		<>
			<Heading as="h3" size="lg" m={2}>カテゴリ別に検索</Heading>
			<SimpleGrid columns={[1, 2, 4]} spacing='40px' mt={4}>
				{genresData?.map((genre, index) => (
					<Link 
						key={index}
						to={genre.path}
						state={{ genre: genre.name }}
						onClick={() => setCurrentGenre(genre.path)}
					>
						<Box
							position='relative'
							color="black"
							height='120px'
							display='flex'
							justifyContent='center'
							alignItems='center'
						>
							<Box
								position='absolute'
								top='0'
								left='0'
								right='0'
								bottom='0'
								style={{
									backgroundImage: `url(${genre.photo})`,
									backgroundSize: 'cover',
									backgroundPosition: 'right',
									opacity: currentGenre === genre.path ? '0.5' : '1'
								}}
							/>
							<Text
								color="black"
								fontSize="xl"
								fontWeight="bold"
							>
								選択中
							</Text>
							<Text
								position='absolute'
								right='0px'
								bottom='5px'
								bg='cor.100'
								color='white'
								px='25px'
								fontSize='sm'
								borderRadius='10px'
								borderRightRadius='0px'
							>
								{genre?.name}
							</Text>
						</Box>
					</Link>
				))}
			</SimpleGrid>
		</>
	);
};

export default Genre;