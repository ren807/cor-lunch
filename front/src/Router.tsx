import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Top from './pages/Top';
import Likes from './pages/Likes';
import ShopSearch from './pages/ShopSearch';
import ShopDetails from './pages/ShopDetails';
import Template from './layouts/Template';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Template />}>
					<Route index element={<Top />} />
					<Route path="likes" element={<Likes />} />
					<Route path="shops">
						<Route index element={<ShopSearch />} />
						<Route path=":shopId" element={<ShopDetails />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
