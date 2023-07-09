import {
	Box,
	Heading,
} from "@chakra-ui/react";
import { useEffect } from "react";

import Genre from "../components/Genre";
import ShopList from "../components/ShopList";
import useGetShopsData from "../hooks/useGetShopsData";

const Top = () => {
	const { getShopsData, shopsData } = useGetShopsData();
	useEffect(() => getShopsData(), [getShopsData]);

	return (
		<>
			<Box my={5} px={5} mx="auto" maxWidth="1600px">
				<Heading as="h3" size="lg" my={8} textAlign={{ base: "center", md: "left" }}>
					カテゴリ別に検索 🔍︎
				</Heading>
				<Genre />
				<Heading as="h3" size="lg" my={8} textAlign={{ base: "center", md: "left" }}>
					本日のオススメの店舗 🎉
				</Heading>
				<ShopList shopsData={shopsData} />
			</Box>
		</>
	);
};

export default Top;