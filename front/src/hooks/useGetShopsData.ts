import axios from 'axios';
import { useCallback, useState } from 'react';

const useGetShopsData = () => {
	// API情報を定義
	const API_KEY = 'f58be42c8cff0bc1';
	const URL = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + API_KEY + '&format=json' + '&large_area=Z011';

	const [shops, setShops] = useState([]);

	const getShopsData = useCallback(
		() => {
			axios
			.get(URL)
			.then((res: any) => {
				const fetchedData = res.data.results.shop;
				setShops(fetchedData);
				console.log(res.data.results.shop);
			})
			.catch((err: any) => {
				console.error(err);
			});
		}, []);
	return { getShopsData , shops};
};

export default useGetShopsData;