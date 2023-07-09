import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
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
			<Heading as="h3" size="lg" my={8} textAlign={{ base: "center", md: "left" }}>カテゴリ別に検索 🔍︎</Heading>
			<Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(8, 1fr)", lg: "repeat(12, 1fr)" }} gap={6} >
				{genresData?.map((genre, index) => (
					<GridItem colSpan={{ base: 1, md: 4, lg: 3 }} >
						<Link key={index} to={genre.path} state={{ genre: genre.name }} onClick={() => setCurrentGenre(genre.path)} >
							<Box position="relative" color="black" height="120px" display="flex" justifyContent="center" alignItems="center" >
								<Box position="absolute" top="0" left="0" right="0" bottom="0"
									style={{
										backgroundImage: `url(${genre.photo})`,
										backgroundSize: "cover",
										backgroundPosition: "right",
										opacity: currentGenre === genre.path ? "0.5" : "1"
									}}
								/>
								<Text color="black" fontSize="xl" fontWeight="bold">選択中</Text>
								<Text position="absolute" right="0px" bottom="5px" bg="cor.100" color="white" px="25px" fontSize="sm" borderRadius="10px" borderRightRadius="0px" >
									{genre?.name}
								</Text>
							</Box>
						</Link>
					</GridItem>
				))}
			</Grid>
		</>
	);
};

export default Genre;