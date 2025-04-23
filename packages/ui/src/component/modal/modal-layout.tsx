import type { MouseEvent, ReactNode } from 'react';
import cn from 'classnames';
import type { AnimationProps } from 'framer-motion';
import { motion as Motion } from 'framer-motion';

import { useResponsive } from '@sono-repo/hook';

import Button from '../button';
import { useModal } from './use-modal';

type TButtonProps = Partial<{
	show: boolean;
	className: string;
	label: string;
	onClick: (e: MouseEvent) => void;
}>;

interface IModalLayout {
	className?: string;
	containerClassName?: string;
	title?: string;
	cancel?: TButtonProps;
	confirm?: TButtonProps;
	children?: ReactNode;
}

const motionProps: Record<'MD' | 'ELSE', AnimationProps> = {
	MD: {
		initial: { opacity: 0, translateY: '30%' },
		animate: { opacity: 1, translateY: 0 }
	},
	ELSE: {
		initial: { translateX: '100%' },
		animate: { translateX: 0 },
		exit: { translateX: '100%' },
		transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
	}
};

const buttonStyle =
	'ui:h-[48px] ui:rounded-[6px] ui:grow ui:text-[16px] ui:lg:min-w-[120px] ui:lg:grow-0';

const ModalLayout = ({
	className,
	containerClassName,
	title,
	cancel,
	confirm,
	children
}: IModalLayout) => {
	const { isMd } = useResponsive();
	const { onCloseModal, onResolve, onReject } = useModal();

	return (
		<Motion.div
			className={cn(
				'ui:flex ui:flex-col',
				'ui:bg-main-10 ui:size-full ui:rounded-[6px] ui:p-[16px]',
				'ui:lg:h-auto ui:lg:max-h-[660px] ui:lg:w-[560px]',
				'ui:shadow-[2px_2px_8px_rgba(0,0,0,0.32)]',
				className
			)}
			onClick={(e) => e.stopPropagation()}
			{...motionProps[isMd ? 'MD' : 'ELSE']}
		>
			{title && (
				<div className="ui:pb-[28px] ui:text-[20px] ui:font-bold">{title}</div>
			)}
			<div
				className={cn(
					'ui:hide-scrollbar ui:grow ui:overflow-y-auto',
					containerClassName,
					{ 'ui:pt-[28px]': !title }
				)}
			>
				{children}
			</div>
			<div className="ui:flex ui:items-center ui:justify-center ui:gap-x-[8px] ui:pt-[12px] ui:lg:justify-end">
				{cancel?.show && (
					<Button
						className={cn('ui:bg-main-20', buttonStyle, cancel.className)}
						onClick={(e) => {
							cancel.onClick ? cancel.onClick(e) : onReject?.();
							onCloseModal();
						}}
					>
						{cancel.label ?? '취소'}
					</Button>
				)}
				{confirm?.show && (
					<Button
						className={cn('ui:bg-main-40', buttonStyle, confirm.className)}
						onClick={(e) => {
							confirm.onClick ? confirm.onClick(e) : onResolve?.();
							onCloseModal();
						}}
					>
						{confirm.label ?? '확인'}
					</Button>
				)}
			</div>
		</Motion.div>
	);
};

export default ModalLayout;
