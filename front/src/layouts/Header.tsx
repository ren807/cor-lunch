import { Box, Button, ButtonGroup, Flex, Heading, Spacer} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<Flex minWidth='max-content' alignItems='center' gap='2' m="3">
				<Box p='2'>
					<Heading size='lg'>
						<Link to="/">CoreTech グルメアプリ</Link>
					</Heading>
				</Box>
				<Spacer />
				<ButtonGroup gap='3'>
					<Link to="likes">
						<Button color="white" bg='cor.100'>お気に入り</Button>
					</Link>
					<Link to="/">
						<Button color="white" bg='cor.100'>TOPに戻る</Button>
					</Link>
				</ButtonGroup>
			</Flex>
		</>
	);
};

export default Header;