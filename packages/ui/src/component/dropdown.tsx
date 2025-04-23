import { type MouseEvent, useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import cn from 'classnames';

interface IItem {
	key: string | number;
	label: string | number;
}

interface IDropDownProps {
	buttonClassName?: string;
	dropdownClassName?: string;
	itemClassName?: string;
	width: number;
	list: IItem[];
	label: string;
	boundary?: HTMLDivElement;
	onClick: (key: string | number, item: IItem) => void;
}

const DropDown = ({
	buttonClassName,
	dropdownClassName,
	itemClassName,
	width,
	list,
	label,
	boundary,
	onClick
}: IDropDownProps) => {
	const [open, setOpen] = useState(false);
	const [button, setButton] = useState<HTMLButtonElement | null>(null);
	const [dropdown, setDropdown] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(button, dropdown, {
		modifiers: [
			{
				name: 'flip',
				options: {
					fallbackPlacements: ['top', 'bottom'],
					padding: 12,
					boundary
				}
			},
			{
				name: 'offset',
				options: {
					offset: [0, 8]
				}
			}
		]
	});

	const handleClickButton = (e: MouseEvent) => {
		e.stopPropagation();

		setOpen((prev) => !prev);
	};

	const handleClickItem = (key: string | number, item: IItem) => {
		setOpen(false);

		onClick(key, item);
	};

	useEffect(() => {
		const onClose = () => {
			setOpen(false);
		};

		window.addEventListener('click', onClose);

		return () => {
			window.removeEventListener('click', onClose);
		};
	}, []);

	return (
		<>
			<button
				className={cn('ui:px-[4px] ui:text-left', buttonClassName)}
				style={{ width }}
				ref={setButton}
				onClick={handleClickButton}
			>
				{label}
			</button>
			{open && (
				<div
					className={cn(
						'ui:flex ui:flex-col ui:gap-y-[4px] ui:rounded-[4px] ui:p-[4px]',
						dropdownClassName
					)}
					style={{ ...styles.popper, width }}
					ref={setDropdown}
					onClick={(e) => e.stopPropagation()}
					{...attributes.popper}
				>
					{list.map(({ key, label }) => (
						<div
							className={cn(
								'ui:flex ui:w-full ui:cursor-pointer ui:items-center',
								itemClassName
							)}
							key={key}
							onClick={() => handleClickItem(key, { key, label })}
						>
							{label}
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default DropDown;
