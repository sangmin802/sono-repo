'use client';

import cn from 'classnames';
import { useParams, usePathname, useRouter } from 'next/navigation';

const tabList = [
	{ name: '전투', path: '' },
	{ name: '수집품', path: '/collection' }
];

const TabList = () => {
	const router = useRouter();
	const { name: userName } = useParams();
	const pathName = usePathname();
	const basePath = `/user-info/${userName}`;
	const [, extraPath] = pathName.split(basePath);

	return (
		<div className="mt-[24px] flex space-x-[16px]">
			{tabList.map(({ name, path }) => (
				<div
					className={cn('cursor-pointer text-[16px]', {
						'font-bold': extraPath === path
					})}
					key={name}
					onClick={() => router.push(`${basePath}/${path}`)}
				>
					{name}
				</div>
			))}
		</div>
	);
};

export default TabList;
