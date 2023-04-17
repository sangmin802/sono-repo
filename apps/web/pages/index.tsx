import { useEffect } from 'react';
import { Button } from '@sono-repo/ui';
import '@sono-repo/ui/styles.css';

export default function Web() {
	return (
		<div>
			<h1
				className="bg-purple-500 font-bold h-[100px] flex items-center justify-center"
				onClick={() => null}
			>
				Web
			</h1>
			<Button />
		</div>
	);
}
