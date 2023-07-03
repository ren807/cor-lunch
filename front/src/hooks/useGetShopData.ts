import { useCallback, useState } from 'react';
import { ShopDataType, Shops } from '../db/Shops';

const useGetShopData = () => {
	const [shopData, setShopData] = useState<ShopDataType>();
	const [error, setError] = useState<Error | null>(null);

	const getShopData = useCallback((id: number) => {
		try {
			const shopsData = Shops();

			if (!shopsData[id - 1]) {
				throw new Error("Could not find shop data with given ID.");
			  }
		setShopData(shopsData[id - 1]);
		setError(null);  // データが取得できた場合はエラーをリセット
    } catch (err) {
		if (err instanceof Error) {
			setError(err);
		  } else {
			setError(new Error('An unknown error occurred.'));
		  }
    }
	}, []);
	return { getShopData, shopData, error };
};

export default useGetShopData;
