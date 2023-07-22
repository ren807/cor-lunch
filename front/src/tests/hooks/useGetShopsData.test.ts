import { renderHook, act } from "@testing-library/react";
import useGetShopsData from "../../hooks/useGetShopsData";
import { ShopDataType, Shops } from "../../db/Shops";

// Shops関数をモック化
jest.mock("../../db/Shops");

describe("useGetShopsData", () => {
	it("４件データが取れているか確認する", () => {
		// モックデータを設定
		const mockShopsData: ShopDataType[] = [
			{
				id: 1,
				path: 'shop-1',
				name: 'Shop 1',
				address: 'address 1',
				genre: 'genre 1',
				genre_kana: 'genre kana 1',
				sub_genre: ['sub genre 1'],
				photo: 'photo 1',
				Recommended_number_of_people: '1-2',
				business_hours: '10:00 - 18:00',
				Regular_holiday: 'Sunday',
				time_from_company: '10 mins',
				one_word: 'Great!'
			},
			{
				id: 2,
				path: 'shop-2',
				name: 'Shop 2',
				address: 'address 2',
				genre: 'genre 2',
				genre_kana: 'genre kana 2',
				sub_genre: ['sub genre 2'],
				photo: 'photo 2',
				Recommended_number_of_people: '1-2',
				business_hours: '10:00 - 18:00',
				Regular_holiday: 'Sunday',
				time_from_company: '10 mins',
				one_word: 'Normal!'
			},
			{
				id: 3,
				path: 'shop-3',
				name: 'Shop 3',
				address: 'address 3',
				genre: 'genre 3',
				genre_kana: 'genre kana 3',
				sub_genre: ['sub genre 3'],
				photo: 'photo 3',
				Recommended_number_of_people: '1-2',
				business_hours: '10:00 - 18:00',
				Regular_holiday: 'Sunday',
				time_from_company: '10 mins',
				one_word: 'Normal!'
			},
			{
				id: 4,
				path: 'shop-4',
				name: 'Shop 4',
				address: 'address 4',
				genre: 'genre 4',
				genre_kana: 'genre kana 4',
				sub_genre: ['sub genre 4'],
				photo: 'photo 4',
				Recommended_number_of_people: '1-2',
				business_hours: '10:00 - 18:00',
				Regular_holiday: 'Sunday',
				time_from_company: '10 mins',
				one_word: 'Normal!'
			},
		];

		// Shops関数の戻り値をモック化
		(Shops as jest.Mock).mockReturnValue(mockShopsData);

		const { result } = renderHook(() => useGetShopsData());

		expect(result.current.shopsData).toBeNull(); // 初期値のチェック

		// getShopsDataを実行
		act(() => {
			result.current.getShopsData();
		});

		// shopsDataが設定されることを確認
		expect(result.current.shopsData).not.toBeNull();
		if(result.current.shopsData){ 
			expect(result.current.shopsData.length).toBe(4); // ランダムに4件取得されることをチェック
		}
	});
});
