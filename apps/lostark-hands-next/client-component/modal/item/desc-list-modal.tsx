'use client';

import DangerousHTML from '@/client-component/dangerous-html';
import Label from '@/client-component/label';
import ModalLayout from '@/client-component/modal/layout';
import type { IModalItemProps } from '@/client-component/modal/types';

const DescListModal = ({ title, list }: IModalItemProps['descListModal']) => {
	return (
		<ModalLayout
			title={title}
			footerProps={{ cancel: { show: false } }}
			containerClassName="space-y-[12px]"
		>
			{list.map(({ title, afterTitle, desc }) => (
				<div key={title}>
					<div className="flex items-center space-x-[4px]">
						<Label>{title}</Label>
						{afterTitle && <div>{afterTitle}</div>}
					</div>
					<DangerousHTML
						className="mt-[6px] pl-[4px]"
						html={desc}
					/>
				</div>
			))}
		</ModalLayout>
	);
};

export default DescListModal;
