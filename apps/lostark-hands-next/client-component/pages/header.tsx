'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button, Input } from '@sono-repo/ui';

import ShadowStickyElement from '@/client-component/sticky-element';

const Header = () => {
	const router = useRouter();

	const [searchQuery, setSearchQuery] = useState('');

	const handleMoveHome = () => {
		router.push('/');
	};

	const handleMoveUserInfo = (e: FormEvent) => {
		e.preventDefault();

		router.push(`/user-info/${searchQuery}`);
	};

	const handleMoveMarkets = () => {
		router.push('/markets');
	};

	return (
		<ShadowStickyElement
			className="z-[90] p-[16px]"
			activeClassName="shadow-[0px_10px_10px_rgba(0,0,0,.3)]"
			as="header"
		>
			<div className="flex items-center justify-between lg:mx-auto lg:w-[1024px]">
				<div
					className="flex cursor-pointer items-center"
					onClick={handleMoveHome}
				>
					<Image
						className="mr-[8px] h-[36px] w-[36px]"
						src="/icons/logo/logo.png"
						width={100}
						height={100}
						alt="logo"
					/>
					<div className="hidden text-[28px] font-bold leading-[36px] sm:block">
						로아 핸즈
					</div>
				</div>
				<div className="flex items-end space-x-[12px]">
					<Button onClick={handleMoveMarkets}>거래소</Button>
					<form
						className="flex max-w-[280px] grow items-center border-b border-white"
						onSubmit={handleMoveUserInfo}
					>
						<Input
							className="grow bg-transparent font-semibold"
							placeholder="유저명을 검색해주세요."
							onChange={setSearchQuery}
						/>
						<Image
							className="inline-block cursor-pointer"
							width={24}
							height={24}
							src="/icons/search/ic_search_16_gray60_ver01.svg"
							alt="searchIcon"
						/>
					</form>
				</div>
			</div>
		</ShadowStickyElement>
	);
};

export default Header;
