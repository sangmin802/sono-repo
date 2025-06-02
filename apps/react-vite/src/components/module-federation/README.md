## 호스트 앱 설정

`@originjs/vite-plugin-federation` 기준임 이하 A라 하겠음

`@module-federation/vite`도 가능은 해보임 이하 B라 하겠음

두가지 라이브러리 모두 내부에서 `top-level-await` 문법을 사용하고 있어, 빌드 target을 맞게 변경해줘야 함
아니면 `vite-plugin-top-level-await` 사용하여 target설정 없이 가능

런타임에 추가되는거다보니, 빌드타임때 에는 뭔지 알 수 없어서 트리셰이킹이 되지는 않음.
remotes에 `'sono-repo-react-vite': 'http://localhost:4173/assets/sono-repo-react-vite.js'`, 이렇게 불러오고 이 안에 여러개의 export const들 중 몇개만 쓴다 한들 불러오는건 일단 모두 불러옴.

불러오는 remotes들을 분리하는게 최선으로보임

그래서 Plugins에 여러개의 federation으로 그냥 내가 나눈다 마인드로 갔을 때, B방식은 빌드 결과물이 좀 이상하게 나옴..;
당장으로선 A쓰는게 나은듯

```js
// vite.config
plugins: [
	federation({
		name: '호스트이름',
		remotes: {
			'sono-repo/react-counter':
				'http://localhost:4173/assets/react-counter.js',
			'sono-repo/react-link': 'http://localhost:4173/assets/react-link.js'
		}
	})
];

build: {
  // vite-plugin-top-level-await로 Target 지정 없이도 가능 << 되도록 이거 쓰기
  target: 'es2022', // 또는 esnest 지원되지 않는 브라우저 있을 수 있음 ex) safari 15아래 크롬 89 아래
}
```

```ts
// d.ts
declare module 'sono-repo/react-counter/create-counter' {
	export default function createCounter(id: string): void;
}

declare module 'sono-repo/react-counter/count-store' {
	const countStore: {
		onSubscribe: (listener: () => void) => () => void;
		addCount: () => void;
		setCount: (newCount: number) => void;
		getCount: () => number;
	};

	export default countStore;
}

declare module 'sono-repo/react-link/create-link' {
	export default function createLink(id: string, onMoveNew: () => void): void;
}
```

```js
// 사용
import countStore from 'sono-repo/react-counter/count-store';
import createCounter from 'sono-repo/react-counter/create-counter';
import createLink from 'sono-repo/react-link/create-link';
```
