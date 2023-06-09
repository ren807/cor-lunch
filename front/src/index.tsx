import ReactDOM from 'react-dom/client';
import Routes from './Router';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<ChakraProvider>
		<Routes />
	</ChakraProvider>
);
