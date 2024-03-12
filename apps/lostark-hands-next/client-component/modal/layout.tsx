import type { ComponentProps, ReactNode } from 'react';
import cn from 'classnames';
import type { AnimationProps } from 'framer-motion';
import { motion as Motion } from 'framer-motion';

import { Button } from '@sono-repo/ui';

import useResponsive from '@/hook/use-responsive';

import { useModalDispatch } from './provider';

type TButtonProps = Partial<ComponentProps<typeof Button> & { show: boolean }>;

interface IModalLayout {
	className?: string;
	containerClassName?: string;
	title?: string;
	footerProps?: Partial<Record<'cancel' | 'confirm', TButtonProps>>;
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

const defaultButtonProps = ({
	props,
	children,
	onClick
}: {
	props?: TButtonProps;
	children: string;
	onClick: () => void;
}) => ({
	show: true,
	children,
	onClick,
	...props
});

const buttonStyle =
	'h-[48px] rounded-[6px] grow text-[16px] lg:min-w-[120px] lg:grow-0';

const ModalLayout = ({
	className,
	containerClassName,
	title,
	children,
	footerProps
}: IModalLayout) => {
	const { onCloseModal } = useModalDispatch();
	const { isMd } = useResponsive();

	const {
		className: cancelClassName,
		show: showCancel,
		...cancelProps
	} = defaultButtonProps({
		props: footerProps?.cancel,
		children: '닫기',
		onClick: onCloseModal
	});
	const {
		className: confirmClassName,
		show: showConfirm,
		...confirmProps
	} = defaultButtonProps({
		props: footerProps?.confirm,
		children: '확인',
		onClick: onCloseModal
	});

	return (
		<Motion.div
			className={cn(
				'flex flex-col',
				'h-full w-full rounded-[6px] bg-main-10 p-[16px]',
				'lg:h-auto lg:max-h-[660px] lg:w-[560px]',
				'shadow-[2px_2px_8px_rgba(0,0,0,0.32)]',
				className
			)}
			onClick={(e) => e.stopPropagation()}
			{...motionProps[isMd ? 'MD' : 'ELSE']}
		>
			{title && <div className="pb-[28px] text-[20px] font-bold">{title}</div>}
			<div
				className={cn(
					'hide-scrollbar grow overflow-y-auto',
					containerClassName,
					{ 'pt-[28px]': !title }
				)}
			>
				{children}
			</div>
			<div className="flex items-center justify-center space-x-[8px] pt-[12px] lg:justify-end">
				{showCancel && (
					<Button
						className={cn('bg-main-20', buttonStyle, cancelClassName)}
						{...cancelProps}
					/>
				)}
				{showConfirm && (
					<Button
						className={cn('bg-main-40', buttonStyle, confirmClassName)}
						{...confirmProps}
					/>
				)}
			</div>
		</Motion.div>
	);
};

export default ModalLayout;
