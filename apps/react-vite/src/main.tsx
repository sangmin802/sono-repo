/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from 'react-dom/client';

import App from '@/app';

import '@/style/main.css';
import ReactQueryProvider from './query-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ReactQueryProvider>
		<App />
	</ReactQueryProvider>
);
