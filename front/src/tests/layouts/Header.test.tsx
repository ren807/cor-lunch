import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../../layouts/Header";

describe("ヘッダーのコンポーネントテスト", () => {

	beforeEach(() => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<Header />
			</MemoryRouter>
		);
	});

	it("タイトルのレンダリングテスト", () => {
		const heading = screen.getByText(/CoreTech グルメアプリ/i);
		expect(heading).toBeInTheDocument();
	});

	it("お気に入りボタンがある、かつTOPに戻るボタンがないをテスト", () => {
		const favoriteButton = screen.getByText(/お気に入り/i);
		const backButton = screen.queryByText(/TOPに戻る/i);

		expect(favoriteButton).toBeInTheDocument();
		expect(backButton).not.toBeInTheDocument();
	});

	it("ハンバーガメニューのテスト", async () => {
		// ドロアーが開いて「お気に入り」という文言があるかテスト
		const hamburgerOpneButton = screen.getByLabelText(/Open menu/i);
		fireEvent.click(hamburgerOpneButton);
		const drawerHeader = screen.getByText(/Menu/i);
		expect(drawerHeader).toBeInTheDocument();

		// ×を押下時にドロアーが閉じるかテスト
		const hamburgerCloseButton = screen.getByLabelText(/Close/i);
		fireEvent.click(hamburgerCloseButton);

		// Menuが消えるまで待つ
		await waitFor(() => {
			const drawerHeader2 = screen.queryByText(/Menu/i);
			expect(drawerHeader2).not.toBeInTheDocument();
		});
	});
});
