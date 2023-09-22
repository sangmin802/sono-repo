/**
 * {@link https://toss.tech/article/typescript-type-compatibility}
 * {@link https://github.com/basarat/typescript-book/blob/master/docs/types/freshness.md#freshness}
 * 객체리터럴타입으로 신선 명시해준게 아닐 경우, 함수, 제너릭, 클래스와 같은 애들은 반환타입을 추론하는 과정에서 구조적타이핑의 특징이 적용되어
 * 반환되는 값에 필수적인 값만 포함되어있더라도 에러를 반환하지 않음.
 * 구조적타이핑 특징 적용 기준인 신선하지 않은 값 대상이 함수, 제너릭 이런애들임..?
 *
 * {@link https://github.com/microsoft/TypeScript/issues/31425}
 * {@link https://github.com/microsoft/TypeScript/issues/241}
 * {@link https://github.com/microsoft/TypeScript/issues/50064}
 * 위 글들을 보면, 함수형식의 객체반환값의 타입이 직접명시된게 아니라면, 반환값에 대한 타입을 추론한다고 함. 이 추론된 값을 기준으로 호환성 체크를 함
 * 타입스크립트에서 타입호환성체크를 한다는것은, 직접 객체리터럴값을 넣는것이 아니라면 구조적타이핑 기준으로 체크를 하기 때문에
 * 필수값이 명시되어있을 때 다른 값이 더 추가되는건 문제 x
 * The return type is not specified, so it's inferred,
 * The inferred return type is then checked for compatibility, and it's compatible.
 */

// const a = (a: { id: number }) => null;

// a({ ...{ id: 1, name: 'hello' } });
// a({ id: 1, name: 'hello' });

// const testObj = { id: 1, name: 'hello' };
// a(testObj);

// interface INum {
// 	num: number;
// }

// const numbers = [1, 2, 3];

// const mapFunc = (list: number[]) =>
// 	list.map((item) => ({ num: item, extra: 'some value' }));

// const aa: INum[] = mapFunc(numbers);

// const forFunc = (list: number[]) => {
// 	const newArr: { num: number; extra: string }[] = [];
// 	for (const i in list) {
// 		newArr.push({ num: Number(i), extra: 'some value' });
// 	}
// 	return newArr;
// };

// const bb: INum[] = forFunc(numbers);

// /**
//  * 얘는 map 함수 내부에서 구조적 타이핑 기준 추론하여 에러 x. 명시해준 타입의 필수값만 존재한다면 ok
//  */
// const a: INum[] = numbers.map((num) => {
// 	const doubled = num * 2;
// 	const tripled = num * 3;
// 	return { num, extra: 'some value' };
// });

// /**
//  * 얘는 map 함수 내부에서 반환값에 대한 리터럴타입으로 명시해주었기에 구조적타이핑 특징 적용 x로 에러
//  */
// const a: INum[] = numbers.map((num): INum => {
// 	const doubled = num * 2;
// 	const tripled = num * 3;
// 	return { num, extra: 'some value' };
// });

// /**
//  * 얘는 리터럴타입으로 명시해주었기에 구조적타이핑 특징 적용 x로 에러
//  */
// const b: INum[] = [{ num: 3, extra: 'some value' }];

// /**
//  * 얘는 반환값을 리터럴타입으로 명시해주었기에 구조적타이핑 특징 적용 x로 에러
//  */
// const asdf = (obj: { id: number }): { id: number } => ({
// 	...obj,
// 	name: 'hello'
// });

// /**
//  * 얘는 반환값이 구조적 타이핑 특징 기준으로 추론되어 에러x
//  */
// const asdf = (obj: { id: number }) => ({
// 	...obj,
// 	name: 'hello'
// });

// const qwer: { id: number } = asdf({ id: 3 });

// /**
//  * 얘는 명시해주었기에 구조적타이핑 특징 적용 x로 에러
//  */
// const oisdf: { id: number } = { id: 3, name: 'hello' };
