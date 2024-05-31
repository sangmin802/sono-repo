import type { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

import Head from '@/app/head';

import Header from '@/app/@component/header';
import Modal from '@/client-component/modal';
import ModalProvider from '@/client-component/modal/provider';

import '@/style/main.css';
import ReactQueryProvider from '@/provider/react-query-provider';

export const metadata: Metadata = {
	title: 'Sono-repo Lostark Hands Next',
	description: 'sono-repo 모노레포 토이프로젝트'
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
					<ModalProvider>
						<Modal />
						<Header />
						<main className="lg:mx-auto lg:w-[1024px]">{children}</main>
					</ModalProvider>
				</ReactQueryProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
};

export default Layout;
