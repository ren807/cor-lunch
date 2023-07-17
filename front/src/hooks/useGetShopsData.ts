import { useCallback, useState } from "react";
import { ShopDataType, Shops } from "../db/Shops";

const useGetShopsData = () => {
	const [shopsData, setShopsData] = useState<Array<ShopDataType> | null>(null);

	const getShopsData = useCallback(() => {
		const shopsData = Shops();

		// おすすめはランダム5件表示
		setShopsData(shopsData.sort(() => Math.random() - 0.5).slice(0,4));
	}, []);

	return { getShopsData , shopsData};
};

export default useGetShopsData;