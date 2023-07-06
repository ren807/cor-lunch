import ReactDOM from 'react-dom/client';
import Routes from './Router';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const theme = extendTheme({
	colors: {
		cor: {
			100: "#F89D05",// コアの色
			200: "#F6F0EA",// ジャンルの背景色
		},
	},
});

root.render(
	<ChakraProvider theme={theme}>
		<Routes />
	</ChakraProvider>
);
