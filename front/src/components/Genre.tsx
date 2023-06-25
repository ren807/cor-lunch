import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Genre = () => {
	return (
		<>
			<Heading as="h3" size="lg" m={2}>カテゴリ別に検索</Heading>
			<SimpleGrid columns={[2, null, 5]} spacing='40px' mt={4}>
				<Link to="category/chineseFood" state={{ genre: "中華"}}>
					<Box
						position='relative'
						color="black"
						height='80px'
						style={{ 
							backgroundImage: `url(https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E4%B8%AD%E8%8F%AF%E6%96%99%E7%90%86.jpeg)`,
							backgroundSize: 'cover',
							backgroundPosition: 'right'
						}}
					>
						<Text
							position='absolute'
							right='0px'
							bottom='5px'
							bg='cor.100'
							color='white'
							px='25px'
							fontSize='sm'
							borderRadius='10px'
							borderRightRadius='0px'
						>
							中華
						</Text>
					</Box>
				</Link>
			</SimpleGrid>
		</>
	);
};

export default Genre;