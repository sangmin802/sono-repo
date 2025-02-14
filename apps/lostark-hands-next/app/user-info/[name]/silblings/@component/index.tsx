'use client';

import type { ICharacterInfo } from '@/service/characters/types';

import Label from '@/client-component/label';
import LabelLayout from '@/client-component/label-layout';

import SilblingList from './silbling-list';

interface ISilbingsProps {
	data?: { server: string; list: ICharacterInfo[] }[];
}

const Silblings = ({ data }: ISilbingsProps) => {
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
						<SilblingList list={list} />
					</div>
				))}
			</div>
		</LabelLayout>
	);
};

export default Silblings;
