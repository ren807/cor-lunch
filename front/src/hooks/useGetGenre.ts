import { useCallback, useState } from "react";
import { GenreDataType, Genres } from "../db/Genres";

const useGetGenre = () => {
	const [genresData, setGenresData] = useState<Array<GenreDataType>| null>(null);

	const getGenresData = useCallback(() => {
		const genres = Genres();
		setGenresData(genres);
		
	}, []);
	
	return { getGenresData , genresData};
};

export default useGetGenre;
