import {
	Box,
	Button,
	Heading,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ShopList from "../components/ShopList";
import { ShopDataType } from "../db/Shops";

const Like = () => {

	const [ shopsData, setShopsData ] = useState<Array<ShopDataType> | null>(null);

	useEffect(() => {
		const storedLikes = localStorage.getItem("likes");
		const likesArray = storedLikes ? JSON.parse(storedLikes) : [];
		setShopsData(likesArray);
	}, []);

	return (
		<>
			{shopsData != null && shopsData.length > 0 ? (
				<Box my={5} px={5} mx="auto" maxWidth="1600px">
					<Stack spacing={7}>
						<Heading size="lg" textAlign={{ base: "center", md: "left" }} >
							お気に入り店舗 ❤
						</Heading>
						<ShopList shopsData={shopsData} />
					</Stack>
				</Box>
			) : (
				<>
					<Box textAlign="center">
						<Stack h="80vh" justifyContent="center" spacing={7}>
							<Text fontSize={{base: "md", md: "xl"}} fontWeight="bold" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
								いいねを押してお気に入りリストを作ろう！🔥
							</Text>
							<Link to="/">
								<Button color="black" _hover={{ bg: "rgba(248, 157, 5, 0.8)" }}>お店を探しに行く</Button>
							</Link>
						</Stack>
					</Box>
				</>
			)}
		</>
	);
};

export default Like;
