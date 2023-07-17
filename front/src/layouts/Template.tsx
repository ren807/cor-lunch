import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Flex } from "@chakra-ui/react";

const Template = () => {
	return (
		<>
			<Flex direction="column" minHeight="100vh">
				<Box flex="1" >
					<Header />
					<Outlet />
				</Box>
				<Footer />
			</Flex>
		</>
	);
};

export default Template;
