import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGetGenre from "../hooks/useGetGenre";

type Props = {
	currentGenre: string;
};

const Genre = (props: Props) => {
	const { getGenresData, genresData } = useGetGenre();
	useEffect(() => getGenresData(), []);

	return (
		<>
			<Heading as="h3" size="lg" m={2}>カテゴリ別に検索</Heading>
			<SimpleGrid columns={[1, 2, 4]} spacing='40px' mt={4}>
				{genresData?.map((genre, index) => (
					<Link key={index} to={genre.path} state={{ genre: genre.name }}>
						<Box
							position='relative'
							color="black"
							height='120px'
							style={{ 
								backgroundImage: `url(${genre.photo})`,
								backgroundSize: 'cover',
								backgroundPosition: 'right'
							}}
						>
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