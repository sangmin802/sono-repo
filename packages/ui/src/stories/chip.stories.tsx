import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '../component/index';

type TChipProps = ComponentProps<typeof Chip> & { fontColor?: string };

type Story = StoryObj<TChipProps>;

/**
 * ### Chip Component
 */
const meta = {
	title: 'DesignSystem/Component/Chip',
	argTypes: {
		fontColor: {
			control: 'color',
			description:
				'`Storybook` 내부에서 Chip 컨텐츠의 폰트 색상 변경 테스트 속성'
		},
		type: {
			control: 'radio',
			description: 'Chip 타입',
			options: ['primary', 'transparent']
		},
		children: { description: 'Chip 컨텐츠' }
	},
	args: {
		fontColor: '#ffffff',
		type: 'transparent',
		children: 'Chip'
	},
	tags: ['autodocs'],
	component: Chip,
	render: ({ fontColor, ...args }) => (
		<Chip
			style={{ color: fontColor }}
			{...args}
		/>
	)
} satisfies Meta<TChipProps>;

export const Primary = {
	args: {
		type: 'primary'
	}
} satisfies Story;

export const Transparent = {
	args: {
		type: 'transparent'
	}
} satisfies Story;

export default meta;
