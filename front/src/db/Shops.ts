export type ShopDataType = {
	path: string;
	name: string;
	address: string;
	genre: string;
	sub_genre: Array<string>;
	photo: string;
	Recommended_number_of_people: string;
	business_hours: string;
	Regular_holiday: string;
	time_from_company: string;
};

export const Shops = (): Array<ShopDataType> => {
	return [
		{
			path: "/shop/1",
			name: "うさぎ",
			address: "東京都渋谷区神泉町8-13 アーガス霜田ビル 1F",
			genre: "麺類",
			sub_genre: ["坦々麺", "汁なし坦々麺"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E3%81%86%E3%81%95%E3%81%8D%E3%82%99.jpeg",
			Recommended_number_of_people: "1~3人",
			business_hours: "11:30～14:30（L.O.）",
			Regular_holiday: "土曜日、日曜日、祝日",
			time_from_company: "7~10分",
		},
		{
			path: "/shop/2",
			name: "中華そば 満鶏軒",
			address: "東京都渋谷区南平台町15-11 南平台野坂ビル 1F",
			genre: "麺類",
			sub_genre: ["油そば", "まぜそば", "つけ麺"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E9%B4%A8%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3.jpeg",
			Recommended_number_of_people: "1~3人",
			business_hours: "11:30～15:30(L.O.15:15)",
			Regular_holiday: "日曜・祝日（土曜日不定休）",
			time_from_company: "5~7分",
		},
		{
			path: "/shop/3",
			name: "トマトマン",
			address: "東京都目黒区青葉台3-1-18",
			genre: "麺類",
			sub_genre: ["つけ麺", "汁なし坦々麺"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E3%83%88%E3%83%9E%E3%83%88%E3%83%9E%E3%83%B3.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30〜15:00(L.O.14:30)",
			Regular_holiday: "日曜日",
			time_from_company: "3~5分",
		},
		{
			path: "/shop/4",
			name: "らーめん たつみ屋",
			address: "東京都世田谷区池尻3丁目4-1",
			genre: "麺類",
			sub_genre: ["ラーメン","つけ麺","餃子"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E3%81%9F%E3%81%A4%E3%81%BF%E5%B1%8B.jpeg",
			Recommended_number_of_people: "1~2人",
			business_hours: "11:30～翌4:00",
			Regular_holiday: "無休",
			time_from_company: "10分",
		},
		{
			path: "/shop/5",
			name: "Oti",
			address: "東京都目黒区青葉台3-10-11 青葉台フラッツ　2F",
			genre: "麺類",
			sub_genre: ["イタリアン", "ダイニングバー"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/Oti.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30～15:00（L.O.14:30）/18:00～23:00（L.O.22:00）",
			Regular_holiday: "月曜日、第２日曜日",
			time_from_company: "3~5分",
		},
		{
			path: "/shop/6",
			name: "和利道 ",
			address: "東京都目黒区青葉台3-10-11 青葉台フラッツ　2F",
			genre: "麺類",
			sub_genre: ["つけ麺", "ラーメン"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E5%92%8C%E5%88%A9%E9%81%93.jpeg",
			Recommended_number_of_people: "1~3人",
			business_hours: "11:00～15:30/18:00～21:00（スープ切れ早仕舞い）",
			Regular_holiday: "水曜日",
			time_from_company: "3~5分",
		},
		{
			path: "/shop/7",
			name: "長寿庵 ",
			address: "東京都目黒区東山3-4-7",
			genre: "麺類",
			sub_genre: ["そば", "うどん", "丼"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E9%95%B7%E5%AF%BF%E5%BA%B5.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30～15:30(L.O.15:00) 17:30～21:00(L.O.22:00) ",
			Regular_holiday: "木曜日",
			time_from_company: "8~10分",
		},
		{
			path: "/shop/8",
			name: "橙 ",
			address: "東京都目黒区大橋1-7-9 パークフラッツ中目黒 1F",
			genre: "中華",
			sub_genre: ["チャーハン", "中華料理"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E6%A9%99.JPG",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30～15:30(L.O.15:00)",
			Regular_holiday: "年末年始",
			time_from_company: "8~10分",
		},
		{
			path: "/shop/9",
			name: "万豚記",
			address: "東京都目黒区東山3-13-3",
			genre: "中華",
			sub_genre: ["ラーメン", "餃子", "中華料理"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E4%B8%87%E8%B1%9A%E8%A8%98.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30 - 26:00（L.O.25:30）",
			Regular_holiday: "無休　※年末年始などを除く",
			time_from_company: "8~10分",
		},
		{
			path: "/shop/10",
			name: "シーメンハン",
			address: "東京都目黒区大橋2-24-4 ホテルサーブ渋谷 1F",
			genre: "中華",
			sub_genre: ["オムライス","中華料理", "小籠包"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E3%82%B7%E3%83%BC%E3%83%A1%E3%83%B3%E3%83%8F%E3%83%B3.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30～17:00 17:00～23:30(L.O.23:00)",
			Regular_holiday: "無休",
			time_from_company: "10分",
		},
		{
			path: "/shop/11",
			name: "田燕 まるかく三",
			address: "東京都目黒区大橋2-22-8 いちご池尻ビル 1F",
			genre: "中華",
			sub_genre: ["中華料理", "居酒屋", "餃子"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E7%94%B0%E7%87%95.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30 - 15:00（14:30L.O.）",
			Regular_holiday: "無休",
			time_from_company: "5~8分",
		},
	];
};
