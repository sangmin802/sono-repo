export const pipe =
	<T>(...fns: ((input: T) => T)[]) =>
	(input: T) =>
		fns.reduce((acc, fn) => fn(acc), input);
