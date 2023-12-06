import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../index';

type TInputProps = ComponentProps<typeof Input>;

type Story = StoryObj<TInputProps>;

/**
 * ### Input
 */
const meta = {
	title: 'DesignSystem/Component/Input',
	tags: ['autodocs'],
	component: Input,
	render: ({ ...args }) => <Input {...args} />
} satisfies Meta<TInputProps>;

export const Default = {
	args: {
		value: 'input'
	}
} satisfies Story;

export default meta;
