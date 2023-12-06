/**
 * @FUCNTION_OVERLOAD
 */

/**
 * @TEST1
 */
(function () {
	function test(a: string, b: number): true;
	function test(a: string, b: string): false;
	function test(a: string, b?: number): false;
	function test(a: string, b?: string | number) {
		if (typeof b === 'number') return true;
		return false;
	}

	const result1 = test('', 1);
	const result2 = test('', '');
	const result3 = test('');
})();

/**
 * @TEST2
 */
(function () {
	function test(a: number, b: { id: number; name: string }): true;
	function test(a: string): false;
	function test(a: string | number, b?: { id: number; name: string }) {
		if (!!b && 'name' in b) return true;
		return false;
	}

	const result1 = test(1, { id: 12, name: '' });
	// const result2 = test(1); // error: need param b
	const result3 = test('');
	// const result4 = test('', { id: 13, name: '' }); // error: unable use param b
})();
