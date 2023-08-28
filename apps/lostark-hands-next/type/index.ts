import type { GRADE } from '@/constant';

export type TGrade = (typeof GRADE)[keyof typeof GRADE];

export type TPrimitives = string | number | boolean | null | undefined;

export interface IObj {
	[key: string]: IObj | TPrimitives | TArr;
}

export type TArr = (IObj | TPrimitives | TArr)[];

/**
 * interface to index signature
 * @link https://github.com/Microsoft/TypeScript/issues/15300#issuecomment-332366024
 */
export type ToIndexSignature<Interface> = {
	[key in keyof Interface]: Interface[key];
};

export type ToIndexSignatureRecursive<T> = T extends TPrimitives
	? T
	: T extends (infer A)[]
	? ToIndexSignatureRecursive<A>[]
	: ToIndexSignature<{
			[K in keyof T]: ToIndexSignatureRecursive<T[K]>;
	  }>;

export type ToFirstLower<A> = A extends `${infer F}${infer S}`
	? F extends Uppercase<F>
		? `${Lowercase<F>}${S}`
		: A
	: A;

export type ToCamelKey<T> = T extends TPrimitives
	? T
	: T extends (infer A)[]
	? ToCamelKey<A>[]
	: {
			[K in keyof T as ToFirstLower<K>]: ToCamelKey<T[K]>;
	  };
