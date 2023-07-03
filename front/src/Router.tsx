import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Top from './pages/Top';
import Likes from './pages/Likes';
import ShopDetails from './pages/ShopDetails';
import Template from './layouts/Template';
import ShopGenre from './pages/ShopGenre';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Template />}>
					<Route index element={<Top />} />
					<Route path="likes" element={<Likes />} />
					<Route path="category/:genreName" element={<ShopGenre />}/>
					<Route path="shop/:shopId" element={<ShopDetails />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;