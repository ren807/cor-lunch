import axios from 'axios';
import { useCallback, useState } from 'react';

const useGetShopsGenre = () => {
	// API情報を定義
	const API_KEY = '?key=f58be42c8cff0bc1';
	const JSON = '&format=json';

	// 店舗情報(電話番号で管理)
	// 中華
	const chineseFood = ['&tel=0354892820'];
	// ラーメン
	const ramen = ['&tel=0334644111'];

	// URL生成
	const URL = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/' + API_KEY + JSON + '&name=沖縄料理';

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
			.catch(() => {
				alert("データが取れませんでした");
			});
		}, []);
	return { getShopsData , shops};
};

export default useGetShopsGenre;