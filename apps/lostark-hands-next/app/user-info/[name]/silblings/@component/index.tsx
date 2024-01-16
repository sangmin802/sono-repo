'use client';

import cn from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import type { ICharacterInfo } from '@/service/characters/types';

import Label from '@/client-component/label';
import LabelLayout from '@/client-component/label-layout';

import { CDN_URL } from '@/constant';

import { CLASS } from '@/type/content';

interface ISilbingsProps {
	data?: { server: string; list: ICharacterInfo[] }[];
}

const Silblings = ({ data }: ISilbingsProps) => {
	const router = useRouter();

	const handleMoveUserInfo = (name: string) => {
		router.push(`/user-info/${name}`);
	};

	return (
		<LabelLayout
			as="section"
			label="원정대 캐릭터"
			empty={{
				status: !data,
				fallback: '생성된 원정대 캐릭터가 없습니다.'
			}}
		>
			<div className="space-y-[24px]">
				{data?.map(({ server, list }) => (
					<div
						className="rounded-[6px] bg-main-10 p-[8px]"
						key={server}
					>
						<Label className="mb-[12px] w-fit">{server}</Label>
						<div className="mb-[-12px] flex flex-wrap">
							{list.map((info) => (
								<div
									className={cn(
										'mr-[6px] flex w-[142px] cursor-pointer items-center space-x-[8px] pb-[12px]',
										'md:mr-[16px] md:w-[160px]'
									)}
									key={info.characterName}
									onClick={() => handleMoveUserInfo(info.characterName)}
								>
									<Image
										className="h-[36px] w-[36px]"
										width={36}
										height={36}
										src={`${CDN_URL}/2018/obt/assets/images/common/thumb/${
											CLASS[info.characterClassName]
										}.png`}
										alt={info.characterClassName}
									/>
									<div className="min-w-0">
										<div className="text-[12px] text-gray-400">
											{info.characterClassName}
										</div>
										<div>{info.itemMaxLevel}</div>
										<div className="truncate">
											<span className="mr-[4px] text-[12px] text-gray-400">
												{info.characterLevel}Lv
											</span>
											{info.characterName}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</LabelLayout>
	);
};

export default Silblings;
