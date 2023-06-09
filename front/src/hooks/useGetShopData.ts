import { useCallback, useState } from 'react';
import { ShopDataType, Shops } from '../db/Shops';

const useGetShopData = () => {
	const [shopData, setShopData] = useState<ShopDataType>();
	const getShopData = useCallback((id: number) => {
		const shopsData = Shops();
		setShopData(shopsData[id]);
	}, []);
	return { getShopData, shopData };
};

export default useGetShopData;
