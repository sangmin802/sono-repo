import type { IObj, TArr, ToCamelKey, ToPascalKey } from '@/types';

/**
 * @description Change all pascal keys in the array to camel format
 */
export const pascalToCamelInArray = <T extends TArr>(
	arr: T
): ToCamelKey<T>[number][] => {
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
export const pascalToCamel = <T extends IObj>(val: T): ToCamelKey<T> => {
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

/**
 * @description Change all pascal keys in the object to camel format
 * use in api request params
 */
export const camelToPascal = <T extends IObj>(val: T): ToPascalKey<T> => {
	const entries = Object.entries(val);

	return entries.reduce<ToPascalKey<T>>((prev, [key, val]) => {
		const newKey = key.replace(/^[a-z]/, (char) => char.toUpperCase());

		return { ...prev, [newKey]: val };
	}, Object());
};

export const onlyNumber = (str: string) => str.match(/\d+/g);
