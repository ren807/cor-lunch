import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
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
			<Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(8, 1fr)", lg: "repeat(12, 1fr)" }} gap={6} >
				{genresData?.map((genre, index) => (
					<GridItem colSpan={{ base: 1, md: 4, lg: 3 }} borderRadius="5px" overflow="hidden">
						<Link key={index} to={genre.path} state={{ genre: genre.name }} onClick={() => setCurrentGenre(genre.path)} >
							<Box position="relative" height="120px" display="flex" justifyContent="center" alignItems="center" >
								<Box position="absolute" top="0" left="0" right="0" bottom="0"
									style={{
										backgroundImage: `url(${genre.photo})`,
										backgroundSize: "cover",
										backgroundPosition: "right",
										opacity: currentGenre === genre.path ? "0.5" : "1"
									}}
								/>
								<Text color="black" fontSize="xl" fontWeight="bold">選択中</Text>
								<Text position="absolute"  right="0px" bottom="5px" bg="cor.100" color="white" px={{base: "5px", md: "25px"}} fontSize="sm" borderRadius="10px" borderRightRadius="0px" isTruncated maxWidth={{base: "100px", md: "500px"}}>
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