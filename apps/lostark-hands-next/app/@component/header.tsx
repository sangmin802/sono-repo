'use client';

import type { FormEvent } from 'react';
import { useRef, useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { RiAuctionLine } from 'react-icons/ri';
import cn from 'classnames';
import NextImage from 'next/image';
import { useRouter } from 'next/navigation';

import { Image, Input } from '@sono-repo/ui';

import StickyElement from '@/client-component/sticky-element';

const Header = () => {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState('');
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleMoveHome = () => {
		router.push('/');
	};

	const handleMoveUserInfo = (e: FormEvent) => {
		e.preventDefault();

		if (!inputRef.current) return;

		inputRef.current.blur();
		router.push(`/user-info/${searchQuery}`);
	};

	const handleMoveMarkets = () => {
		router.push('/markets');
	};

	return (
		<StickyElement
			className="bg-main-10 z-[90] before:absolute before:inset-0 before:z-[-1]"
			activeClassName={cn(
				'bg-transparent shadow-[0px_10px_10px_rgba(0,0,0,.3)] before:backdrop-blur-[26px]'
			)}
			as="header"
		>
			<div className="flex items-center justify-between p-[16px] lg:mx-auto lg:w-[1024px]">
				<div
					className="flex cursor-pointer items-center"
					onClick={handleMoveHome}
				>
					<Image
						className="mr-[8px] h-[36px] w-[36px] overflow-hidden rounded-full"
						src="/icons/logo/logo.png"
						width={100}
						height={100}
						alt="logo"
						as={NextImage}
					/>
					<div className="hidden text-[28px] font-bold leading-[36px] md:block">
						로아 핸즈
					</div>
				</div>
				<div className="flex items-center space-x-[16px]">
					<RiAuctionLine
						className="size-[24px] translate-y-[4px] cursor-pointer"
						onClick={handleMoveMarkets}
					/>
					<form
						className="flex max-w-[165px] items-center border-b border-white"
						onSubmit={handleMoveUserInfo}
					>
						<Input
							id="hello"
							ref={inputRef}
							className="min-w-0 bg-transparent font-semibold"
							placeholder="유저명을 검색해주세요."
							onChange={setSearchQuery}
						/>
						<LuSearch className="inline-block size-[24px] cursor-pointer" />
					</form>
				</div>
			</div>
		</StickyElement>
	);
};
export default Header;
