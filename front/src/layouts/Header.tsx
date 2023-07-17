import { Box, Button, ButtonGroup, Flex, Heading, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Stack, Grid } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

	const { isOpen, onOpen, onClose } = useDisclosure();
	const location = useLocation();

	const BtnGroup = (props: any) => (
		<ButtonGroup gap="3" {...props}>
			{location.pathname !== "/likes" && (
				<Link to="likes">
					<Button color="white" bg="cor.100" borderRadius="24px" _hover={{ bg: "rgba(248, 157, 5, 0.8)" }}>お気に入り</Button>
				</Link>
			)}
			{location.pathname !== "/" &&(
				<Link to="/">
					<Button color="white" bg="cor.100" borderRadius="24px" _hover={{ bg: "rgba(248, 157, 5, 0.8)" }}>TOPに戻る</Button>
				</Link>
			)}
		</ButtonGroup>
	);

	const BtnGroupSP = (props: any) => (
		<Box gap="3" {...props} textAlign="center" fontWeight="bold">
			<Box my={4}>
				{location.pathname !== "/likes" && (
					<Link
						to="likes"
						style={{display: "block", color: "black", borderBottom: "2px solid orange"}}
						onClick={onClose}
					>
						お気に入り
					</Link>
				)}
			</Box>
			<Box my={3}>
				{location.pathname !== "/" &&(
					<Link
						to="/"
						style={{display: "block", color: "black", borderBottom: "2px solid orange"}}
						onClick={onClose}
					>
						TOPに戻る
					</Link>
				)}
			</Box>
		</Box>
	);

	return (
		<>
			<Flex justifyContent="space-between" my={5} px={5} maxWidth="1600px" mx="auto" alignItems="center">
				<Link to="/">
					<Heading size={{ base: "md", md:"lg"}} textAlign={{ base: "center", md: "left" }} style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
						CoreTech グルメアプリ
					</Heading>
				</Link>
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
						<DrawerHeader textAlign="center">Menu</DrawerHeader>
						<DrawerBody>
							<BtnGroupSP flexDirection="column" />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
			<hr/>
		</>
	);
};

export default Header;
