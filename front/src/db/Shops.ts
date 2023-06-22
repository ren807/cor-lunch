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
			photo: "",
			Recommended_number_of_people: "1~3人",
			business_hours: "11:30～14:30（L.O.）",
			Regular_holiday: "土曜日、日曜日、祝日",
			time_from_company: "7~10分",
		},
		{
			path: "/shop/2",
			name: "中華そば 満鶏軒 南平台店",
			address: "東京都渋谷区南平台町15-11 南平台野坂ビル 1F",
			genre: "麺類",
			sub_genre: ["油そば", "まぜそば", "つけ麺"],
			photo: "",
			Recommended_number_of_people: "1~3人",
			business_hours: "11:30～15:30(L.O.15:15)",
			Regular_holiday: "日曜・祝日（土曜日不定休）",
			time_from_company: "5~7分",
		},
		{
			path: "/shop/3",
			name: "トマトマン（THE TOMATOMAN）",
			address: "東京都目黒区青葉台3-1-18",
			genre: "麺類",
			sub_genre: ["つけ麺", "汁なし坦々麺"],
			photo: "",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30〜15:00(L.O.14:30)",
			Regular_holiday: "日曜日",
			time_from_company: "3~5分",
		},
		{
			path: "/shop/4",
			name: "龍の子 ",
			address: "東京都世田谷区池尻3-3-2",
			genre: "麺類",
			sub_genre: ["中華料理","坦々麺","食堂"],
			photo: "",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30～13:30 18:00～22:00",
			Regular_holiday: "日曜日",
			time_from_company: "8~10分",
		},
	];
};
