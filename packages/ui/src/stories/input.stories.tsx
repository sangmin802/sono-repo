import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../index';

type TCustonInputProps = ComponentProps<typeof Input>;

type Story = StoryObj<TCustonInputProps>;

/**
 * ### Input
 */
const meta = {
	title: 'DesignSystem/Component/Input',
	argTypes: {
		className: {
			description: 'tailwindcss 기준 input 스타일'
		}
	},
	tags: ['autodocs'],
	component: Input,
	render: ({ ...args }) => <Input {...args} />
} satisfies Meta<TCustonInputProps>;

export const Default = {
	args: {
		value: 'input'
	}
} satisfies Story;

export default meta;
