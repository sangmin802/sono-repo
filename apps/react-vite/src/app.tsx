import { Suspense } from 'react';

import SuspenseQueryChild from './components/suspense-query-child';

const App = () => {
	return (
		<div className="bg-hello test-one-30 test-five-19">
			App
			<Suspense fallback={<div>Loading...</div>}>
				<SuspenseQueryChild index={1} />
				<SuspenseQueryChild index={2} />
				<SuspenseQueryChild index={3} />
			</Suspense>
		</div>
	);
};

export default App;
