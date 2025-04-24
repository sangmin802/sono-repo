'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import type { z } from 'zod';
import { string } from 'zod';

import { Button, Input } from '@sono-repo/ui';

const emailRule = string()
	.min(7, { message: 'Must be at least 7 characters long.' })
	.email({ message: 'Invalid email address' });

const initError = { status: false, message: '' };

/**
 * Zod Test용 컴포넌트
 * component props와 같이 전달되는 타입이 예상가능, 확실한 경우에는 zod가 크게 무의미한것 같음.
 * input value나 서드파티라이브러리에서 반환되는 값에 대한 타입은 예상못할 수 있어서 런타임환경과
 * 개발환경에서 함께 타입을 체크해줄 필요가 있을 때에 zod를 사용하는것이 좋아보임.
 */
const ZodTest = () => {
	const [email, setEmail] = useState<z.infer<typeof emailRule>>('');
	const [error, setError] = useState(initError);

	/** 주소 입력 */
	const handleChangeAddress = (value: string) => {
		setEmail(value);
	};

	/** 제출 */
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const result = emailRule.safeParse(email);

		if (!result.success) {
			setError({ status: true, message: result.error.format()._errors[0] });
		} else {
			setError(initError);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Input
					placeholder="email"
					value={email}
					onChange={handleChangeAddress}
				/>
				<Button>Check</Button>
			</form>
			<div>{error.status && error.message}</div>
		</>
	);
};

export default ZodTest;
