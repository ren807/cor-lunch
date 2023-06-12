import {
	Box,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	SimpleGrid,
	Stack,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Shop from '../components/Shop';
import useGetShopData from '../hooks/useGetShopData';

const Top = () => {
	const { getShopData, shopData } = useGetShopData();
	useEffect(() => getShopData(0), []);

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
				<Heading as="h4">オススメの店舗！</Heading>
				<SimpleGrid columns={2} spacing={10} >
					<Box>
						<Shop shopData={shopData}/>
					</Box>
					<Box>
						<Shop shopData={shopData}/>
					</Box>
					<Box>
						<Shop shopData={shopData}/>
					</Box>
					<Box>
						<Shop shopData={shopData}/>
					</Box>
					<Box>
						<Shop shopData={shopData}/>
					</Box>
					<Box>
						<Shop shopData={shopData}/>
					</Box>
				</SimpleGrid>
			</Stack>
		</Box>
	);
};

export default Top;
