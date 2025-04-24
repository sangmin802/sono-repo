'use client';
/**
 * Zod v4
 * @see {@link https://v4.zod.dev/v4#introducing-zodmini}
 */

import type { FormEvent } from 'react';
import { useState } from 'react';
// import { z } from 'zod';
import * as z from '@zod/mini';

import { Button, Input } from '@sono-repo/ui';

// zod 사용 방식이 ZodString 클래스 내에 들어있는 모든 메소드들도 사용하지 않더라도 그냥 같이 번들링될꺼임
// const emailRule = z
// 	.string()
// 	.min(7, { message: 'Must be at least 7 characters long.' })
// 	.email({ message: 'Invalid email address' });

// @zod/mini 사용 방식이 위에서 클래스 안에 있던것들이 다 별도사용으로 빠져서 트리셰이킹 될꺼임.
// 근데 되도록 그냥 zod 쓰래. 번들링된 크기가 너무너무 중요한 경우에만 고려
const emailRule = z
	.string()
	.check(
		z.minLength(7, { error: 'Must be at least 7 characters long.' }),
		z.email({ error: 'Invalid email address' })
	);

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
			setError({ status: true, message: result.error.issues[0].message });
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
