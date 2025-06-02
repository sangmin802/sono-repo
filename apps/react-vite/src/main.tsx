import ReactDOM from 'react-dom/client';

import App from '@/app';

import '@/style/main.css';
import ReactQueryProvider from './query-provider';

ReactDOM.createRoot(document.getElementById('root')!, {
	onUncaughtError: (error, errorInfo) => {
		console.log('uncaughtError', error, errorInfo);
	},
	onCaughtError: (error, errorInfo) => {
		console.log('caughtError', error, errorInfo);
	}
}).render(
	<ReactQueryProvider>
		<App />
	</ReactQueryProvider>
);
