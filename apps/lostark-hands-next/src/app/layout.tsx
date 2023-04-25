import { FC, ReactNode } from 'react';

import Head from '@/app/head';

const Layout: FC = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<Head />
			<body>{children}</body>
		</html>
	);
};

export default Layout;
