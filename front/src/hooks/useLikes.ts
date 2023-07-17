import { useEffect, useState } from "react";
import { ShopDataType } from "../db/Shops";

const useLikes = (shop?: ShopDataType) => {
	const name = shop?.name;
	// いいね機能
	const [like, setLike] = useState(false);

	// ロードした際、localStrageに値があるか調べる
	useEffect(() => {
		if (name) {
			const storedLikes = localStorage.getItem("likes");
			const likesArray = storedLikes ? JSON.parse(storedLikes) : [];
			const isLiked = likesArray.length > 0 ? likesArray.find((shop: ShopDataType) => shop.name === name) : false;
			setLike(!!isLiked);
		}
	}, [name]);

	// localStrageに値を挿入・削除して挿入
	const handleClickSwitchFlag = () => {
		const storedLikes = localStorage.getItem("likes");
		const likesArray = storedLikes ? JSON.parse(storedLikes) : [];

		if (like) {
			// localStrageに値がある場合
			const updatedLikes = likesArray.length > 0 ? likesArray.filter((shop: ShopDataType) => shop.name !== name) : [];
			localStorage.setItem("likes", JSON.stringify(updatedLikes));

		}else {
			// localStrageに値がない場合
			likesArray.push(shop);
			localStorage.setItem("likes", JSON.stringify(likesArray));
		}
		setLike(!like);
	};

	return {like, handleClickSwitchFlag};
};

export default useLikes;