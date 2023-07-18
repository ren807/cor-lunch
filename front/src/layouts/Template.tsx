import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Grid } from "@chakra-ui/react";

const Template = () => {
	return (
		<>
			<Grid templateRows="1fr auto" minHeight="100vh">
				<Box>
					<Header />
					<Outlet />
				</Box>
				<Footer />
			</Grid>
		</>
	);
};

export default Template;
