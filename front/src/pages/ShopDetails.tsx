import { useEffect } from 'react';
import useGetShopData from '../hooks/useGetShopData';

const ShopDetails = () => {
	const { getShopData, shopData } = useGetShopData();
	useEffect(() => getShopData(0), []);

	return (
		<>
			<h1>これは店舗詳細ページです！</h1>
			<p>{shopData?.name}</p>
			<p>{shopData?.address}</p>
			<ul>
				{shopData?.tags.map((tag: string) => {
					return <li>{tag}</li>;
				})}
			</ul>
		</>
	);
};

export default ShopDetails;
