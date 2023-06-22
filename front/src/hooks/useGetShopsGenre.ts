import { useCallback, useState } from 'react';
import { ShopDataType, Shops } from '../db/Shops';

const useGetShopsGenre = (genre: string) => {
	const [shopsData, setShopsData] = useState<Array<ShopDataType> | null>(null);

	const getShopsData = useCallback(() => {
		const shopsData = Shops();

		// フィルタリング
		const filteredShopsData = shopsData.filter((shop) => shop.genre === genre);
		setShopsData(filteredShopsData);
	}, []);
	
	return { getShopsData , shopsData};
};

export default useGetShopsGenre;