import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GenreDataType, Genres } from '../db/Genres';

const useGetGenre = () => {
	const location = useLocation();
	const [genresData, setGenresData] = useState<Array<GenreDataType>>();

	const getGenresData = useCallback(() => {
		const genres = Genres();
		setGenresData(genres);
	
		// TOPページの場合
		if (location.pathname === '/') {
			const topShopsData = genres.filter((genre) => genre.path !== '/category/other');
			setGenresData(topShopsData);
		}
		
	}, []);
	
	return { getGenresData , genresData};
};

export default useGetGenre;