import { Grid, GridItem } from "@chakra-ui/react";
import Shop from "./Shop";

const ShopList = ({shopsData}: any) => {
	return (
		<Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(8, 1fr)", lg: "repeat(12, 1fr)" }} gap={6}>
			{shopsData?.map((shop: any, index: number) => (
				<GridItem colSpan={{ base: 1, md: 4, lg: 3 }} >
					<Shop {...shop} index={index} />
				</GridItem>
			))}
		</Grid>
	);
};

export default ShopList;