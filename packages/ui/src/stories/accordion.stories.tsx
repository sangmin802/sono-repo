/**
 * Storybook에서 컴파운드 패턴의 컴포넌트에 대한 문서를 잘 쓸 수 있는 방법 없을까..?
 */

import { type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';

import { Accordion } from '../index';

type TContainerProps = ComponentProps<typeof Accordion.Container>;
type TSummaryProps = ComponentProps<typeof Accordion.Summary>;
type TContentProps = ComponentProps<typeof Accordion.Content>;
type TAccordionProps = ComponentProps<typeof Accordion> & {
	'Accordion.Container.onChange': TContainerProps['onChange'];
	'Accordion.Container.id': TContainerProps['id'];
	'Accordion.Summary': TSummaryProps;
	'Accordion.Summary.arrowMode': TSummaryProps['arrowMode'];
	'Accordion.Content': TContentProps;
};

type Story = StoryObj<TAccordionProps>;

/**
 * ### Accordion
 */
const meta = {
	title: 'DesignSystem/Component/Accordion',
	tags: ['autodocs'],
	argTypes: {
		'Accordion.Container.onChange': {
			description: 'Accordion status 변경 trigger'
		},
		'Accordion.Container.id': {
			description: 'Accordion Container 고유 id'
		},
		'Accordion.Summary': {
			description: '[children] Accordion Summary 컴포넌트'
		},
		'Accordion.Summary.arrowMode': {
			description: '화살표 색상 모드',
			control: 'radio',
			options: ['DARK', 'WHITE']
		},
		'Accordion.Content': {
			description: '[children] Accordion Content 컴포넌트'
		}
	},
	component: Accordion,
	render: ({ ...args }) => {
		const arrowMode = args['Accordion.Summary.arrowMode'];
		const isWhiteMode = arrowMode === 'WHITE';

		return (
			<div className={cn({ 'bg-black': isWhiteMode })}>
				<Accordion>
					<Accordion.Container
						className="w-[80%] bg-orange-500"
						id={1}
					>
						<Accordion.Summary
							className={cn({ 'text-white': isWhiteMode })}
							arrowMode={arrowMode}
						>
							{args['Accordion.Summary'].children}
						</Accordion.Summary>
						<Accordion.Content
							className={cn('bg-purple-500', { 'text-white': isWhiteMode })}
						>
							{args['Accordion.Content'].children}
						</Accordion.Content>
					</Accordion.Container>
					<Accordion.Container
						className="w-[80%] bg-orange-500"
						id={2}
					>
						<Accordion.Summary
							className={cn({ 'text-white': isWhiteMode })}
							arrowMode={arrowMode}
						>
							{args['Accordion.Summary'].children}
						</Accordion.Summary>
						<Accordion.Content
							className={cn('bg-purple-500', { 'text-white': isWhiteMode })}
						>
							{args['Accordion.Content'].children}
						</Accordion.Content>
					</Accordion.Container>
				</Accordion>
			</div>
		);
	}
} satisfies Meta<TAccordionProps>;

export const Default = {
	args: {
		'Accordion.Summary': {
			children: 'Accordion 버튼'
		},
		'Accordion.Summary.arrowMode': 'DARK',
		'Accordion.Content': {
			children:
				// eslint-disable-next-line max-len
				'Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠Accordion 콘텐츠'
		}
	}
} satisfies Story;

export default meta;
