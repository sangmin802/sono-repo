/** camelCase -> kebab-case */
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
