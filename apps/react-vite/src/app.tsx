import { Suspense } from 'react';

import PreWarming from './components/pre-warming';
import ReactForget from './components/react-forget';
import ThrowPromiseTest from './components/throw-promise-test';
import ZodTest from './components/zod-test';

const Fallback = () => {
	console.log('서스펜스 Fallback 렌더링');

	return <div>서스펜스</div>;
};

const App = () => {
	return (
		<div>
			App
			<Suspense fallback={<Fallback />}>
				<ThrowPromiseTest />
			</Suspense>
			<Suspense fallback={<div>LOADING...</div>}>
				{/* <PreWarming /> */}
				{/* <ZodTest /> */}
				{/* <ReactForget /> */}
			</Suspense>
		</div>
	);
};

export default App;
