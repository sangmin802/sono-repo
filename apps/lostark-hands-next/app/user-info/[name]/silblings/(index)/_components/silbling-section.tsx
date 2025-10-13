'use client';

import type { ICharacterInfo } from '@/service/characters/_types';

import Label from '@/client-component/label';
import LabelLayout from '@/client-component/label-layout';

import SilblingList from './silbling-list';

interface ISilbingsProps {
	data?: { server: string; list: ICharacterInfo[] }[];
}

const SilblingSection = ({ data }: ISilbingsProps) => {
	return (
		<LabelLayout
			as="section"
			label="원정대 캐릭터"
			empty={{
				status: !data,
				fallback: '생성된 원정대 캐릭터가 없습니다.'
			}}
		>
			<div className="flex flex-col gap-y-[24px]">
				{data?.map(({ server, list }) => (
					<div
						className="bg-main-10 rounded-[6px] p-[8px]"
						key={server}
					>
						<Label className="mb-[12px] w-fit">{server}</Label>
						<SilblingList list={list} />
					</div>
				))}
			</div>
		</LabelLayout>
	);
};

export default SilblingSection;
