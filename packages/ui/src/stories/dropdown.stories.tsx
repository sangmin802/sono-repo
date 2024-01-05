import { type ComponentProps, useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '../index';

type TDropdownProps = ComponentProps<typeof Dropdown>;

type Story = StoryObj<TDropdownProps>;

const RenderComponent = (props: TDropdownProps) => {
	const [container, setContainer] = useState<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!container) return;

		container.scrollTo({ top: 200 });
	}, [container]);

	return (
		<div
			className="h-[300px] overflow-y-auto bg-purple-300"
			ref={setContainer}
		>
			<Dropdown
				buttonClassName="my-[300px]"
				boundary={container ?? undefined}
				{...props}
			/>
		</div>
	);
};

/**
 * ### Dropdown
 * popper 상하 flip 기능
 */
const meta = {
	title: 'DesignSystem/Component/Dropdown',
	tags: ['autodocs'],
	argTypes: {
		buttonClassName: {
			description: 'Button 스타일'
		},
		dropdownClassName: {
			description: 'Dropdown 스타일'
		},
		itemClassName: {
			description: 'Dropdown Item 스타일'
		},
		label: {
			description: 'Button Label'
		},
		list: {
			description: 'Dropdown List'
		}
	},
	component: Dropdown,
	render: RenderComponent
} satisfies Meta<TDropdownProps>;

export const Default = {
	args: {
		label: 'Dropdown',
		list: [
			{ key: 0, label: 'Apple' },
			{ key: 1, label: 'Banana' },
			{ key: 2, label: 'Grapes' },
			{ key: 3, label: 'Peach' }
		]
	}
} satisfies Story;

export default meta;
