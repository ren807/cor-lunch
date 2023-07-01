export type GenreDataType = {
	name: string;
	path: string;
	photo: string;
};

export const Genres = ():Array<GenreDataType> => {
	return [
		{
			name: "中華",
			path: "/category/chineseFood",
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E4%B8%AD%E8%8F%AF%E6%96%99%E7%90%86.jpeg",
		},
		{
			name: "麺類",
			path: "/category/noodle",
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E9%BA%BA%E9%A1%9E.jpeg",
		},
		{
			name: "プレートランチ・丼",
			path: "/category/meal",
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E4%B8%BC%E3%82%82%E3%81%AE.jpeg",
		},
		{
			name: "その他",
			path: "/category/other",
			photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/bbq.jpeg",
		},
	];
};