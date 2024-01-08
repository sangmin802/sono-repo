import { type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';

import { Accordion } from '../index';

type TAccordionProps = ComponentProps<typeof Accordion>;

type Story = StoryObj<TAccordionProps>;

/**
 * ### Accordion
 */
const meta = {
	title: 'DesignSystem/Component/Accordion',
	tags: ['autodocs'],
	argTypes: {
		summary: {
			description: 'Accordion 버튼'
		},
		details: {
			description: 'Accordion 콘텐츠'
		},
		arrowMode: {
			description: '화살표 색상 모드',
			control: 'radio',
			options: ['DARK', 'WHITE']
		}
	},
	component: Accordion,
	render: ({ ...args }) => {
		const isWhiteMode = args.arrowMode === 'WHITE';

		return (
			<div className={cn({ 'bg-black': isWhiteMode })}>
				<Accordion
					className="w-[200px]"
					{...args}
					summary={{
						className: cn({ 'text-white': isWhiteMode }),
						...args.summary
					}}
					details={{
						className: cn({ 'text-white': isWhiteMode }),
						...args.details
					}}
				/>
			</div>
		);
	}
} satisfies Meta<TAccordionProps>;

export const Default = {
	args: {
		summary: {
			children: 'Accordion 버튼'
		},
		details: {
			children: 'Accordion 콘텐츠'
		},
		arrowMode: 'DARK'
	}
} satisfies Story;

export default meta;
