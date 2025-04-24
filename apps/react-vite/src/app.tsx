import PreWarming from './components/pre-warming';
import ZodTest from './components/zod-test';
import { test } from './lib';

const App = () => {
	// treeShaking test
	test.test2();
	return (
		<div>
			App
			<PreWarming />
			<ZodTest />
		</div>
	);
};

export default App;
