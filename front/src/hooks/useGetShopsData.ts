import { useCallback, useState } from 'react';
import { Shops } from '../db/Shops';

const useGetShopsData = () => {
	const [shopsData, setShopsData] = useState([]);
	const GetShopsData = useCallback(() => {
		const shopsData = Shops;
	}, []);
	return { shopsData };
};
