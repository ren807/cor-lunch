import { useNavigate, useParams } from "react-router-dom";
import { Box, Heading} from "@chakra-ui/react";
import { useEffect } from "react";

import useGetShopsGenre from "../hooks/useGetShopsGenre";
import Genre from "../components/Genre";
import ShopList from "../components/ShopList";

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
			navigate("/");
		}
	}, [genreName, getShopsData, navigate]);

	return (
		<>
			<Box my={5} px={5} mx="auto" maxWidth="1600px">
				<Heading as="h3" size="lg" my={8} textAlign={{ base: "center", md: "left" }} style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
					カテゴリ別に検索 🔍︎
				</Heading>
				<Genre />
				<Heading as="h3" size="lg" my={8} textAlign={{ base: "center", md: "left" }} style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
					青葉台周辺の{shopsData?.[0].genre} 😋
				</Heading>
				<ShopList shopsData={shopsData} />
			</Box>
		</>
	);
};

export default ShopGenre;