'use client';

import { ChangeEvent, FC, useState } from 'react';
import { z } from 'zod';

import { Input } from '@sono-repo/ui';

const emailRule = z
	.string()
	.min(7, { message: 'Must be at least 7 characters long.' })
	.email({ message: 'Invalid email address' });

const initError = { status: false, message: '' };

/**
 * Zod Test용 컴포넌트
 * component props와 같이 전달되는 타입이 예상가능, 확실한 경우에는 zod가 크게 무의미한것 같음.
 * input value나 서드파티라이브러리에서 반환되는 값에 대한 타입은 예상못할 수 있어서 런타임환경과
 * 개발환경에서 함께 타입을 체크해줄 필요가 있을 때에 zod를 사용하는것이 좋아보임.
 */
const ZodTest: FC = () => {
	const [email, setEmail] = useState<z.infer<typeof emailRule>>('');
	const [error, setError] = useState(initError);

	const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const result = emailRule.safeParse(value);

		if (!result.success) {
			setError({ status: true, message: result.error.format()._errors[0] });
		} else {
			setError(initError);
		}

		setEmail(value);
	};

	return (
		<>
			<Input
				placeholder="email"
				value={email}
				onChange={handleChangeAddress}
			/>
			<div>{error.status && error.message}</div>
		</>
	);
};

export default ZodTest;
