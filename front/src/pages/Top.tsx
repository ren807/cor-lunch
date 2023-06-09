import {
	Box,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	ListItem,
	Stack,
	UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Top = () => {
	const navigate = useNavigate();

	const onClickSearchButton = () => {
		navigate('shops');
	};

	return (
		<Box p="20px">
			<Stack>
				<Heading as="h2">これはTOPページです！</Heading>
				<hr />
				<Heading as="h3">食べたいものを選んで検索！</Heading>
				<Box>
					<CheckboxGroup>
						<Stack spacing="16px" direction="row">
							<Checkbox value="ラーメン">ラーメン</Checkbox>
							<Checkbox value="中華">中華</Checkbox>
							<Checkbox value="定食">定食</Checkbox>
						</Stack>
					</CheckboxGroup>
					<Button onClick={onClickSearchButton}>検索</Button>
				</Box>
				<Heading as="h3">オススメの店舗！</Heading>
				<UnorderedList>
					<ListItem>
						<Link to="shops/1">店舗1</Link>
					</ListItem>
					<ListItem>
						<Link to="shops/2">店舗2</Link>
					</ListItem>
					<ListItem>
						<Link to="shops/3">店舗3</Link>
					</ListItem>
				</UnorderedList>
			</Stack>
		</Box>
	);
};

export default Top;
