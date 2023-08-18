'use client';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Input } from '@sono-repo/ui';

import logo from '@/public/icons/logo/logo.png';
import searchIcon from '@/public/icons/search/ic_search_16_gray60_ver01.svg';

const Header = () => {
	const router = useRouter();
	const ioRef = useRef(null);
	const [isScrolled, setIsScrolled] = useState(false);

	const handleMoveHome = () => {
		router.push('/');
	};

	useEffect(() => {
		if (!ioRef.current) return;
		const el = ioRef.current;

		const observer = new IntersectionObserver((entry) => {
			setIsScrolled(!entry[0].isIntersecting);
		});

		observer.observe(el);

		return () => observer.unobserve(el);
	}, []);

	return (
		<>
			<div ref={ioRef} />
			<header
				className={cn(
					'sticky top-0 z-[90] bg-neutral-900 p-[16px] transition duration-[.3s] ease-out',
					{
						'shadow-[2px_0_16px_rgba(0,0,0,.8)]': isScrolled
					}
				)}
			>
				<div className="flex items-center justify-between lg:mx-auto lg:w-[1024px]">
					<div
						className="flex cursor-pointer items-center"
						onClick={handleMoveHome}
					>
						<Image
							className="mr-[8px] h-[36px] w-[36px]"
							src={logo}
							width={100}
							height={100}
							alt="logo"
						/>
						<div className="hidden text-[28px] font-bold sm:block">
							로아 핸즈
						</div>
					</div>
					<div className="flex w-[280px] items-center border-b border-white">
						<Input
							className="w-[260px] bg-transparent font-semibold text-white"
							placeholder="유저명을 검색해주세요."
						/>
						<Image
							className="inline-block cursor-pointer"
							width={24}
							height={24}
							src={searchIcon}
							alt="searchIcon"
						/>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
