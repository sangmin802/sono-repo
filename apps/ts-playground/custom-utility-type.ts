/**
 * @description get object type in array
 */
type TGetContent<T> = T extends (infer K)[] ? K : T;

/**
 * @description camelCase to ke-bab
 */
type ToKebab<
	Insert extends string,
	Output extends string = ''
> = Insert extends `${infer A}${infer B}`
	? ToKebab<
			B,
			A extends Uppercase<A> ? `${Output}-${Lowercase<A>}` : `${Output}${A}`
	  >
	: Output;

type newType = ToKebab<'camelCaseToKebabCase'>;

/**
 * @description get first Char type
 */
type AA<T> = T extends `${infer A}${string}` ? A : T;

type W = AA<'Hello'>;
