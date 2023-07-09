import {
	Box,
	Heading,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import { useEffect } from "react";

import Genre from "../components/Genre";
import Shop from "../components/Shop";
import useGetShopsData from "../hooks/useGetShopsData";

const Top = () => {
	const { getShopsData, shopsData } = useGetShopsData();
	useEffect(() => getShopsData(), [getShopsData]);

	return (
		<>
			<Box my={5} px={5} mx="auto" maxWidth="1600px">
				{/* カテゴリ一覧 */}
				<Genre />
				{/* おすすめ一覧 */}
				<Heading as="h3" size="lg" my={8} textAlign={{ base: "center", md: "left" }}>本日のオススメの店舗 🎉</Heading>
				<Wrap spacing="30px">
					{shopsData?.map((shop, index) => (
						<WrapItem key={index} m="auto" shadow="md">
							<Shop {...shop}/>
						</WrapItem>
					))}
				</Wrap>
			</Box>
		</>
	);
};

export default Top;
