import { Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Genre = () => {
	return (
		<>
			<Heading as="h3" size="lg" m={2}>カテゴリ別に検索</Heading>
			<SimpleGrid columns={[2, null, 5]} spacing='40px'>
				<Link to="category/chineseFood" state={{ genre: "中華"}}>
					<Center bg='cor.200' height='80px'>
						中華
					</Center>
				</Link>
				<Link to="category/noodles" state={{ genre: "麺類"}}>
					<Center bg='cor.200' height='80px'>
						麺類
					</Center>
				</Link>
				<Link to="category/setMeal" state={{ genre: "定食・丼"}}>
					<Center bg='cor.200' height='80px'>
						定食・丼
					</Center>
				</Link>
				<Link to="category/curry" state={{ genre: "カレー"}}>
					<Center bg='cor.200' height='80px'>
						カレー
					</Center>
				</Link>
				<Link to="category/noodles" state={{ genre: "定食"}}>
					<Center bg='cor.200' height='80px'>
						定食
					</Center>
				</Link>
			</SimpleGrid>
		</>
	);
};

export default Genre;