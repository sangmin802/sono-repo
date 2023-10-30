/**
 * Suspense core 조각 예시
 * {@link https://maxkim-j.github.io/posts/suspense-argibraic-effect/}
 */

async function runPureTask(task: any) {
	for (;;) {
		// while true
		//!!! 태스크를 리턴할 수 있을 때까지 바쁜대기를 함(무한루프) !!!
		try {
			const a = task();
			return a; // 태스크 값을 리턴할 수 있게 되면 무한루프에서 벗어난다
		} catch (x) {
			// throw를 거른다
			if (x instanceof Promise) {
				await x; // pending promise가 throw된 경우 await으로 resolve 시도 => suspense
			} else {
				throw x; // Error가 throw된 경우 그대로 error throw => ErrorBoundary, 종료
			}
		}
	}
}

const cache = new Map();
const pending = new Map();

function createResolver(id: string) {
	if (cache.has(id)) {
		return cache.get(id); // 캐시 맵객체
	}
	if (pending.has(id)) {
		throw pending.get(id); // Pending Promise throw
	}
	// 비동기 로직
	const promise = new Promise((res) => {
		a = res;
	}).then((text) => {
		pending.delete(id);
		cache.set(id, text);
	});

	pending.set(id, promise); // 팬딩 객체에 팬딩인거 표시
	throw promise;
}

let a: any = null;

setTimeout(() => {
	a('its me');
}, 1000);

runPureTask(() => createResolver('hello')).then((a) => console.log(a));

/**
 * 요약
 *  @RULE1 각 api 요청에 대한 결과값을 캐싱함
 *  @RULE2 각 api 요청에 대한 promise를 캐싱함
 *  1. api 호출 시, 해당 api의 결과값이 캐싱되어있다면 그 값을 그냥 반환함
 *  2. api 호출 시, 해당 api가 아직 pending상태로 존재한다면 그 상태의 promise를 반환함
 *  3. 1, 2에 해당되지 않다면, 해당 api 호출이 완료되었을 때 @RULE1 에 캐싱하고, @RULE2 에서 해당 api 호출에 대한 promise를 제거하도록 해당 api 로직을 보수함
 *  4. 3에서 보수된 api 요청 로직을 @RULE2 에 저장함
 *  5. 해당 api 요청 로직을 throw(중단)로 던짐. **매우중요**
 *  6. 위 가공이 완료된 api 요청을 옵저빙할 수 있도록 함
 *  7. while 조건문으로는 종료되지 않는 비동기 무한루프 while 구문을 생성함
 *  8. try로 api 요청을 실행함
 *  9. 처음에는 api 요청이 완료되지 않은 상태라 가공된 api 요청을 중단으로 던짐
 *  10. catch에서 던져진 값이 promise라면 해당 api 요청의 결과를 대기함
 *  11. catch에서 던져진 값이 error라면 다시 throw 하여 ErrorBoundary로 전달
 *  12. 11번의 api 요청이 fulfilled로 완료되면, 가공해준 로직인 @RULE1 @RULE2 를 수행하고 종료되며, 다시 while 구문이 반복수행됨
 *  13. try로 api 요청을 실행함
 *  14. 이번에는 캐싱된 결과값이 있어 api 요청을 중단하며 던지는것이 아닌 정적인 값을 그냥 return 함
 *  15. 비동기 무한루프 while이 try return에서 값을 반환하면서 종료함.
 */
