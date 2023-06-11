import ReactDOM from 'react-dom/client';
import Routes from './Router';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const theme = extendTheme({
	colors: {
		cor: {
			100: "#F89D05",
		},
	},
});

root.render(
	<ChakraProvider theme={theme}>
		<Routes />
	</ChakraProvider>
);
