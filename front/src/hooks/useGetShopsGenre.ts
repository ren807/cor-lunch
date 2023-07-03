import { useCallback, useState } from 'react';
import { ShopDataType, Shops } from '../db/Shops';

const useGetShopsGenre = (genre: string | undefined) => {
	const [shopsData, setShopsData] = useState<Array<ShopDataType> | null>(null);

	const getShopsData = useCallback(() => {
		const shopsData = Shops();

		if (genre !== undefined) {
			const shopsData = Shops();

			// フィルタリング
			const filteredShopsData = shopsData.filter((shop) => shop.genre_kana === genre);
				setShopsData(filteredShopsData);
			} else {
				setShopsData(null);
			}
	}, [genre]);

	return { getShopsData , shopsData};
};

export default useGetShopsGenre;