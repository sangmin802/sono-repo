import type { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

import Head from '@/app/(index)/head';

import Header from '@/app/(index)/_components/header';

import 'swiper/css';
import '@/style/main.css';
import ReactQueryProvider from '@/provider/react-query-provider';

export const metadata: Metadata = {
	title: '로아핸즈 - 로스트아크 정보 제공 토이프로젝트',
	description:
		'로스트아크 open api 기반 정보 제공 토이프로젝트 입니다. 로스트아크의 다양한 정보를 제공합니다. PWA를 지원하여 앱으로 다운로드 받을 수 있습니다.',
	keywords: ['로스트아크', 'pwa', 'sono-repo']
};

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<link
				rel="icon"
				href="/favicon.ico"
				sizes="any"
			/>
			<Head />
			<body className="hide-scrollbar bg-main-10">
				<ReactQueryProvider>
					<Header />
					<main className="lg:mx-auto lg:w-[1024px]">{children}</main>
				</ReactQueryProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
};

export default Layout;
