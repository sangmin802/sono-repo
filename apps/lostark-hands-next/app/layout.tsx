import { FC, ReactNode } from 'react';

import Head from '@/app/head';

import '@/style/global.css';

const Layout: FC = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<Head />
			<body className="bg-neutral-900">
				<main className="lg:mx-auto lg:w-[1024px]">{children}</main>
			</body>
		</html>
	);
};

export default Layout;
