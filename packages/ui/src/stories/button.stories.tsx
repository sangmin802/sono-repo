import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../component/index';

type TButtonProps = ComponentProps<typeof Button>;

type Story = StoryObj<TButtonProps>;

/**
 * ### Button Component
 */
const meta = {
	title: 'DesignSystem/Component/Button',
	argTypes: {
		children: { description: 'Button 컨텐츠' }
	},
	args: {
		children: 'Button'
	},
	tags: ['autodocs'],
	component: Button,
	render: ({ ...args }) => <Button {...args} />
} satisfies Meta<TButtonProps>;

export const Default = {} satisfies Story;

export default meta;
