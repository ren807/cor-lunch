import { Box, Button, ButtonGroup, Flex, Heading, Spacer} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

	const location = useLocation();

	return (
		<>
			<Flex minWidth='max-content' alignItems='center' gap='2' m="3" mx='10'>
				<Box p='2' >
					<Heading size='lg'>
						<Link to="/">CoreTech グルメアプリ</Link>
					</Heading>
				</Box>
				<Spacer />
				<ButtonGroup gap='3'>
					{location.pathname !== '/likes' && (
						<Link to="likes">
							<Button color="white" bg='cor.100' borderRadius='24px' _hover={{ bg: 'rgba(248, 157, 5, 0.8)' }}>お気に入り</Button>
						</Link>
					)}
					{location.pathname !== '/' &&(
						<Link to="/">
							<Button color="white" bg='cor.100' borderRadius='24px' _hover={{ bg: 'rgba(248, 157, 5, 0.8)' }}>TOPに戻る</Button>
						</Link>
					)}
				</ButtonGroup>
			</Flex>
			<hr/>
		</>
	);
};

export default Header;