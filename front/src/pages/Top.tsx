import {
	Box,
	Heading,
	Stack,
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
				<Stack spacing={7}>
					<Heading size="lg" textAlign={{ base: "center", md: "left" }} style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
						カテゴリ別に検索 🔍︎
					</Heading>
					<Genre />
					<Heading size="lg" textAlign={{ base: "center", md: "left" }} style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
						本日のオススメの店舗 🎉
					</Heading>
					<ShopList shopsData={shopsData} />
				</Stack>
			</Box>
		</>
	);
};

export default Top;