import type { IObj, TArr, ToCamelKey } from '@/type';

/**
 * @description Change all pascal keys in the array to camel format
 */
export const pascalToCamelInArray = <T extends TArr>(
	arr: T | null
): ToCamelKey<T>[number][] | null => {
	if (!arr) return arr;

	return arr.map((val) => {
		const isObject = typeof val === 'object' && val;

		// array
		if (isObject && Array.isArray(val)) return pascalToCamelInArray(val);

		// object
		if (isObject) return pascalToCamel(val);

		return val;
	});
};

/**
 * @description Change all pascal keys in the object to camel format
 */
export const pascalToCamel = <T extends IObj>(
	val: T | null
): ToCamelKey<T> | null => {
	if (!val) return val;

	const entries = Object.entries(val);

	return entries.reduce<ToCamelKey<T>>((prev, [key, val]) => {
		const newKey = key.replace(/^[A-Z]/, (char) => char.toLowerCase());
		const isObject = typeof val === 'object' && val;

		// array
		if (isObject && Array.isArray(val))
			return { ...prev, [newKey]: pascalToCamelInArray(val) };

		// object
		if (isObject) return { ...prev, [newKey]: pascalToCamel(val) };

		return { ...prev, [newKey]: val };
	}, Object());
};
