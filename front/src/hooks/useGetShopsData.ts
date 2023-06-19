import { useCallback, useState } from 'react';
import { ShopDataType, Shops } from '../db/Shops';

const useGetShopsData = () => {
	const [shopsData, setShopsData] = useState<Array<ShopDataType> | null>(null);

	const getShopsData = useCallback(() => {
		const shopsData = Shops();
		setShopsData(shopsData);
	}, []);

	return { getShopsData , shopsData};
};

export default useGetShopsData;