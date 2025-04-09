import { Suspense } from 'react';

import SuspenseQueryChild from './components/suspense-query-child';

const App = () => {
	return (
		<div>
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
