import { Box, Button, ButtonGroup, Flex, Heading, Spacer, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

	const { isOpen, onOpen, onClose } = useDisclosure();
	const location = useLocation();

	const BtnGroup = (props: any) => (
		<ButtonGroup gap='3' {...props}>
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
	);

	return (
		<>
			<Flex minWidth='max-content' alignItems='center' gap='2' m="3" mx='10'>
				<Box p='2' >
					<Heading size='lg'>
						<Link to="/">CoreTech グルメアプリ</Link>
					</Heading>
				</Box>
				<Spacer />
				<IconButton
					display={{ base: "flex", md: "none" }}
					aria-label="Open menu"
					onClick={onOpen}
					variant="outline"
					icon={<HamburgerIcon />}
				/>
				<BtnGroup display={{ base: "none", md: "flex" }} />
			</Flex>
			<Drawer isOpen={isOpen} onClose={onClose}>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader>Menu</DrawerHeader>
						<DrawerBody>
							<BtnGroup flexDirection="column" />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
			<hr/>
		</>
	);
};

export default Header;
