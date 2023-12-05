import type { PropsWithChildren } from 'react';

import Head from '@/app/head';

import Modal from '@/client-component/modal';
import ModalProvider from '@/client-component/modal/provider';
import Header from '@/client-component/pages/header';

import '@/style/main.css';

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
				<ModalProvider>
					<Modal />
					<Header />
					<main className="lg:mx-auto lg:w-[1024px]">{children}</main>
				</ModalProvider>
			</body>
		</html>
	);
};

export default Layout;
