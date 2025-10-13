'use client';

import cn from 'classnames';
import { useParams, usePathname, useRouter } from 'next/navigation';

const tabList = [
	{ name: '전투', path: '' },
	{ name: '수집품', path: '/collection' },
	{ name: '아바타', path: '/avatar' },
	{ name: '캐릭터', path: '/silblings' }
];

const TabList = () => {
	const router = useRouter();
	const { name: userName } = useParams();
	const pathName = usePathname();

	const basePath = `/user-info/${userName}`;

	const [, extraPath] = pathName.split(basePath);

	return (
		<div className="flex shadow-[0px_10px_10px_rgba(0,0,0,.3)]">
			{tabList.map(({ name, path }) => (
				<div
					className={cn('cursor-pointer px-[16px] py-[4px] text-[16px]', {
						'bg-main-20 rounded-t-[6px] font-bold': extraPath === path
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
