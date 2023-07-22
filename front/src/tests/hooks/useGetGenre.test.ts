import { renderHook, act } from "@testing-library/react";
import useGetGenre from "../../hooks/useGetGenre";
import { GenreDataType, Genres } from "../../db/Genres";

// Genres関数をモック化
jest.mock("../../db/Genres");

describe("useGetGenre", () => {
	it("カテゴリ検索用の情報を取得する", () => {
		// モックデータを設定する
		const mockGenreData: GenreDataType[] = [
			{
				name: "テスト_中華",
				path: "/category/chineseFood",
				photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E4%B8%AD%E8%8F%AF%E6%96%99%E7%90%86.jpeg",
			},
			{
				name: "テスト_麺類",
				path: "/category/noodle",
				photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E9%BA%BA%E9%A1%9E.jpeg",
			},
			{
				name: "テスト_ランチ・定食",
				path: "/category/meal",
				photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/%E4%B8%BC%E3%82%82%E3%81%AE.jpeg",
			},
			{
				name: "テスト_その他",
				path: "/category/other",
				photo: "https://core-app-s3.s3.ap-northeast-1.amazonaws.com/bbq.jpeg",
			},
		];

		// 戻り値をモック化する
		(Genres as jest.Mock).mockReturnValue(mockGenreData);

		const { result } = renderHook(() => useGetGenre());

		// 初期値チェック
		expect(result.current.genresData).toBeNull();

		// getGenresDataを実行
		act(() => {
			result.current.getGenresData();
		});

		// 実行後に取得した値がNullでないことを確認
		expect(result.current.genresData).not.toBeNull();

		// ４件のジャンルがとれていることを確認する
		if (result.current.genresData) {
			expect(result.current.genresData.length).toBe(4);
		}
	});
});
