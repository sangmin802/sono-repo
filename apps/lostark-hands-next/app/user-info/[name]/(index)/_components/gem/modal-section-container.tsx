'use client';

import type { PropsWithChildren } from 'react';
import { Fragment, useState } from 'react';

import { Modal, ModalLayout } from '@sono-repo/ui';
import { removeHtmlTag } from '@sono-repo/util/convert';

import type { IParsedGem } from '@/service/armories/_types';

import DangerousHTML from '@/client-component/dangerous-html';
import GradeText from '@/client-component/grade-text';
import IndentStringGroup from '@/client-component/indent-string-group';
import ItemPartBox from '@/client-component/item-part-box';
import Thumbnail from '@/client-component/thumbnail';
import TripodSkillCustom from '@/client-component/tripod-skill-custom';

interface IModalSectionContainerProps extends PropsWithChildren {
	data: IParsedGem[] | null;
}

const ModalSectionContainer = ({
	data,
	children
}: IModalSectionContainerProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const list = data?.map((item) => ({
		...item,
		name: removeHtmlTag(item.name),
		tooltip: item.tooltip.filter(({ type }) => type === 'ItemPartBox')
	}));

	const handleClickOpen = () => {
		if (!data) return;

		setIsOpen(true);
	};

	const handleClickClose = () => {
		setIsOpen(false);
	};

	return (
		<div
			className="mb-[-8px] flex cursor-pointer flex-wrap"
			onClick={handleClickOpen}
		>
			{children}
			<Modal
				isOpen={isOpen}
				onClickOutside={handleClickClose}
			>
				<ModalLayout confirm={{ show: true, onClick: handleClickClose }}>
					<div className="flex flex-col gap-y-[12px]">
						{list?.map(({ icon, name, grade, tooltip }, idx) => (
							<div
								className="flex flex-col justify-center"
								key={idx}
							>
								<GradeText
									className="mb-[4px] text-[12px] font-medium"
									grade={grade ?? '일반'}
								>
									{name}
								</GradeText>
								<div className="flex gap-x-[8px]">
									<Thumbnail
										className="h-[40px] w-[40px]"
										src={icon}
										alt={name}
										grade={grade}
									/>
									<div>
										{tooltip.map((item, index) => (
											<Fragment key={index}>
												{item.type === 'ItemPartBox' && (
													<ItemPartBox {...item} />
												)}
												{item.type === 'IndentStringGroup' && (
													<IndentStringGroup {...item} />
												)}
												{item.type === 'TripodSkillCustom' && (
													<TripodSkillCustom {...item} />
												)}
												{item.type === 'SingleTextBox' && (
													<DangerousHTML
														className="text-[12px] [&_*]:text-[12px]"
														html={item.value}
													/>
												)}
											</Fragment>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</ModalLayout>
			</Modal>
		</div>
	);
};

export default ModalSectionContainer;
