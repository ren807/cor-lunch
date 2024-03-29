export type ShopDataType = {
	id: number;
	path: string;
	name: string;
	address: string;
	genre: string;
	genre_kana: string;
	sub_genre: Array<string>;
	photo: string;
	Recommended_number_of_people: string;
	business_hours: string;
	Regular_holiday: string;
	time_from_company: string;
	one_word: string;
};

export const Shops = (): Array<ShopDataType> => {
	return [
		{
			id: 1,
			path: "/shop/1",
			name: "うさぎ",
			address: "東京都渋谷区神泉町8-13 アーガス霜田ビル 1F",
			genre: "麺類",
			genre_kana: "noodle",
			sub_genre: ["坦々麺", "汁なし坦々麺"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E3%81%86%E3%81%95%E3%81%8D%E3%82%99.jpeg",
			Recommended_number_of_people: "1~2人",
			business_hours: "11:30～14:30（L.O.）",
			Regular_holiday: "土曜日、日曜日、祝日",
			time_from_company: "7~10分",
			one_word: "",
		},
		{
			id: 2,
			path: "/shop/2",
			name: "中華そば 満鶏軒",
			address: "東京都渋谷区南平台町15-11 南平台野坂ビル 1F",
			genre: "麺類",
			genre_kana: "noodle",
			sub_genre: ["油そば", "まぜそば", "つけ麺"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E9%B4%A8%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3.jpeg",
			Recommended_number_of_people: "1~3人",
			business_hours: "11:30～15:30(L.O.15:15)",
			Regular_holiday: "日曜・祝日（土曜日不定休）",
			time_from_company: "5~7分",
			one_word: "",
		},
		{
			id: 3,
			path: "/shop/3",
			name: "トマトマン",
			address: "東京都目黒区青葉台3-1-18",
			genre: "麺類",
			genre_kana: "noodle",
			sub_genre: ["つけ麺", "汁なし坦々麺"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E3%83%88%E3%83%9E%E3%83%88%E3%83%9E%E3%83%B3.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30〜15:00(L.O.14:30)",
			Regular_holiday: "日曜日",
			time_from_company: "3~5分",
			one_word: "",
		},
		{
			id: 4,
			path: "/shop/4",
			name: "たつみ屋",
			address: "東京都世田谷区池尻3丁目4-1",
			genre: "麺類",
			genre_kana: "noodle",
			sub_genre: ["ラーメン","つけ麺","餃子"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E3%81%9F%E3%81%A4%E3%81%BF%E5%B1%8B.jpeg",
			Recommended_number_of_people: "1~2人",
			business_hours: "11:30～翌4:00",
			Regular_holiday: "無休",
			time_from_company: "10分",
			one_word: "",
		},
		{
			id: 5,
			path: "/shop/5",
			name: "Oti",
			address: "東京都目黒区青葉台3-10-11 青葉台フラッツ　2F",
			genre: "麺類",
			genre_kana: "noodle",
			sub_genre: ["イタリアン", "ダイニングバー"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/Oti.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30～15:00（L.O.14:30）/18:00～23:00（L.O.22:00）",
			Regular_holiday: "月曜日、第２日曜日",
			time_from_company: "3~5分",
			one_word: "",
		},
		{
			id: 6,
			path: "/shop/6",
			name: "和利道 ",
			address: "東京都目黒区青葉台3-10-11 青葉台フラッツ　2F",
			genre: "麺類",
			genre_kana: "noodle",
			sub_genre: ["つけ麺", "ラーメン"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E5%92%8C%E5%88%A9%E9%81%93.jpeg",
			Recommended_number_of_people: "1~3人",
			business_hours: "11:00～15:30/18:00～21:00（スープ切れ早仕舞い）",
			Regular_holiday: "水曜日",
			time_from_company: "3~5分",
			one_word: "",
		},
		{
			id: 7,
			path: "/shop/7",
			name: "長寿庵 ",
			address: "東京都目黒区東山3-4-7",
			genre: "麺類",
			genre_kana: "noodle",
			sub_genre: ["そば", "うどん", "丼"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E9%95%B7%E5%AF%BF%E5%BA%B5.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30～15:30(L.O.15:00) 17:30～21:00(L.O.22:00) ",
			Regular_holiday: "木曜日",
			time_from_company: "8~10分",
			one_word: "",
		},
		{
			id: 8,
			path: "/shop/8",
			name: "橙 ",
			address: "東京都目黒区大橋1-7-9 パークフラッツ中目黒 1F",
			genre: "中華",
			genre_kana: "chineseFood",
			sub_genre: ["チャーハン", "中華料理"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E6%A9%99.JPG",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30～15:30(L.O.15:00)",
			Regular_holiday: "年末年始",
			time_from_company: "8~10分",
			one_word: "",
		},
		{
			id: 9,
			path: "/shop/9",
			name: "万豚記",
			address: "東京都目黒区東山3-13-3",
			genre: "中華",
			genre_kana: "chineseFood",
			sub_genre: ["ラーメン", "餃子", "中華料理"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E4%B8%87%E8%B1%9A%E8%A8%98.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30 - 26:00（L.O.25:30）",
			Regular_holiday: "無休　※年末年始などを除く",
			time_from_company: "8~10分",
			one_word: "",
		},
		{
			id: 10,
			path: "/shop/10",
			name: "シーメンハン",
			address: "東京都目黒区大橋2-24-4 ホテルサーブ渋谷 1F",
			genre: "中華",
			genre_kana: "chineseFood",
			sub_genre: ["オムライス","中華料理", "小籠包"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E3%82%B7%E3%83%BC%E3%83%A1%E3%83%B3%E3%83%8F%E3%83%B3.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30～17:00 17:00～23:30(L.O.23:00)",
			Regular_holiday: "無休",
			time_from_company: "10分",
			one_word: "",
		},
		{
			id: 11,
			path: "/shop/11",
			name: "田燕 まるかく三",
			address: "東京都目黒区大橋2-22-8 いちご池尻ビル 1F",
			genre: "中華",
			genre_kana: "chineseFood",
			sub_genre: ["中華料理", "居酒屋", "餃子"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E7%94%B0%E7%87%95+%E3%81%BE%E3%82%8B%E3%81%8B%E3%81%8F%E4%B8%89.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30 - 15:00（14:30L.O.）",
			Regular_holiday: "無休",
			time_from_company: "5~8分",
			one_word: "",
		},
		{
			id: 12,
			path: "/shop/12",
			name: "ジャラナ",
			address: "東京都目黒区青葉台2-1-1 ヴェルエ青葉台 2F",
			genre: "その他",
			genre_kana: "other",
			sub_genre: ["インドカレー", "居酒屋", "ダイニングバー"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E3%82%B7%E3%82%99%E3%83%A3%E3%83%A9%E3%83%8A.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:00 - 翌0:00",
			Regular_holiday: "無休",
			time_from_company: "3~5分",
			one_word: "",
		},
		{
			id: 13,
			path: "/shop/13",
			name: "STARBUCKS RESERVE",
			address: "東京都目黒区青葉台2-19-23",
			genre: "その他",
			genre_kana: "other",
			sub_genre: ["カフェ"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E3%82%B9%E3%82%BF%E3%83%8F%E3%82%99.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "7:00～22:00",
			Regular_holiday: "不定休",
			time_from_company: "8~10分",
			one_word: "",
		},
		{
			id: 14,
			path: "/shop/14",
			name: "VIBES CURRY",
			address: "東京都目黒区青葉台1-16-19 サクラガーデン E1",
			genre: "その他",
			genre_kana: "other",
			sub_genre: ["インドカレー"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E3%83%8F%E3%82%99%E3%82%A4%E3%83%95%E3%82%99%E3%82%B9.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "12:00～17:00",
			Regular_holiday: "不定休",
			time_from_company: "13~15分",
			one_word: "",
		},
		{
			id: 15,
			path: "/shop/15",
			name: "焼肉ANDY",
			address: "東京都目黒区東山3-13-16 森ビル 1F",
			genre: "その他",
			genre_kana: "other",
			sub_genre: ["焼肉","韓国料理","ホルモン"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/ANDY.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30～14:30(L.O 14:00) 17:00～23:00(L.O 22:00)",
			Regular_holiday: "水曜日",
			time_from_company: "8~10分",
			one_word: "",
		},
		{
			id: 16,
			path: "/shop/16",
			name: "One.",
			address: "東京都目黒区青葉台3-10-11 青葉台フラッツ 102",
			genre: "プレートランチ・丼",
			genre_kana: "meal",
			sub_genre: ["バー"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/One.jpeg",
			Recommended_number_of_people: "1~6人",
			business_hours: "11:30～15:00 (14:30 L.O) 19:00～23:00 (22:00 L.O)",
			Regular_holiday: "日曜日",
			time_from_company: "3~5分",
			one_word: "",
		},
		{
			id: 17,
			path: "/shop/17",
			name: "Indian Time",
			address: "東京都目黒区大橋2-22-4 増本ビル B1F",
			genre: "プレートランチ・丼",
			genre_kana: "meal",
			sub_genre: ["ダイニングバー","バー"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/Indian+Time.jpeg",
			Recommended_number_of_people: "1~3人",
			business_hours: "11:30～14:00",
			Regular_holiday: "土曜・日曜日",
			time_from_company: "3~5分",
			one_word: "",
		},
		{
			id: 18,
			path: "/shop/18",
			name: "富士㐂",
			address: "東京都目黒区青葉台2-21-13 青葉台マンション 106号",
			genre: "プレートランチ・丼",
			genre_kana: "meal",
			sub_genre: ["とんかつ"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E5%AF%8C%E5%A3%AB%E3%90%82.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:30 - 15:30（L.O.15:00）",
			Regular_holiday: "無休",
			time_from_company: "8~10分",
			one_word: "",
		},
		{
			id: 19,
			path: "/shop/19",
			name: "池尻蕎麦",
			address: "東京都世田谷区池尻3-2-3 サンケイグランドハイツ 1F",
			genre: "麺類",
			genre_kana: "noodle",
			sub_genre: ["立ち食いそば","うどん","立ち飲み"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E6%B1%A0%E5%B0%BB%E8%95%8E%E9%BA%A6.jpeg",
			Recommended_number_of_people: "1~2人",
			business_hours: "7:00～24:00",
			Regular_holiday: "無休",
			time_from_company: "8~10分",
			one_word: "",
		},
		{
			id: 20,
			path: "/shop/20",
			name: "393 BURGER",
			address: "東京都目黒区東山3-14-3 東山共同ビル 1F",
			genre: "その他",
			genre_kana: "other",
			sub_genre: ["ハンバーガー"],
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/393.jpeg",
			Recommended_number_of_people: "1~4人",
			business_hours: "11:00～23:00",
			Regular_holiday: "無休",
			time_from_company: "8~10分",
			one_word: "",
		}
	];
};
