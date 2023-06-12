export type ShopDataType = {
	path: string;
	name: string;
	address: string;
	tags: Array<string>;
};

export const Shops = (): Array<ShopDataType> => {
	return [
		{
			path: 'shop/1',
			name: 'テスト店舗だよん',
			address: '東京都目黒区青葉台３丁目６−２８',
			tags: ['コーヒー', 'ランチ'],
		},
	];
};
