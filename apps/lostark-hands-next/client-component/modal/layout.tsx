import type { ComponentProps, ReactNode } from 'react';
import cn from 'classnames';

import { Button } from '@sono-repo/ui';

import { useModalDispatch } from './provider';

type TButtonProps = Partial<ComponentProps<typeof Button> & { show: boolean }>;

interface IModalLayout {
	className?: string;
	title?: string;
	footerProps?: Partial<Record<'cancel' | 'confirm', TButtonProps>>;
	children: ReactNode;
}

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
	title,
	children,
	footerProps
}: IModalLayout) => {
	const { onCloseModal } = useModalDispatch();

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
		<div
			className={cn(
				'flex flex-col',
				'h-full w-full rounded-[6px] bg-neutral-900 p-[16px]',
				'lg:h-auto lg:max-h-[660px] lg:w-[560px]',
				'shadow-[2px_2px_8px_rgba(0,0,0,0.32)]',
				className
			)}
			onClick={(e) => e.stopPropagation()}
		>
			<div className="pb-[28px] text-[20px] font-bold">{title}</div>
			<div className="hide-scrollbar grow overflow-y-auto">{children}</div>
			<div className="flex items-center justify-center space-x-[8px] pt-[12px] lg:justify-end">
				{showCancel && (
					<Button
						className={cn('bg-neutral-800', buttonStyle, cancelClassName)}
						{...cancelProps}
					/>
				)}
				{showConfirm && (
					<Button
						className={cn('bg-neutral-600', buttonStyle, confirmClassName)}
						{...confirmProps}
					/>
				)}
			</div>
		</div>
	);
};

export default ModalLayout;
