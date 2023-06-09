import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<Flex
				as="nav"
				bgColor="orange.300"
				h="60px"
				w="100%"
				position="fixed"
				px="24px"
				justify="space-between"
				align="center"
			>
				<Heading as="h1" fontSize="28px">
					<Link to="/">CoreTech グルメアプリ</Link>
				</Heading>
				<Text>
					<Link to="likes">お気に入り</Link>
				</Text>
			</Flex>
			<Box h="60px" />
		</>
	);
};

export default Header;
