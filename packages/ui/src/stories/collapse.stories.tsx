/**
 * Storybook에서 컴파운드 패턴의 컴포넌트에 대한 문서를 잘 쓸 수 있는 방법 없을까..?
 */

import { type ComponentProps, Fragment } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';

import { Accordion, Collapse } from '../component/index';

type TCollapseProps = ComponentProps<typeof Collapse>;
type TSummaryProps = ComponentProps<typeof Collapse.Summary>;
type TContentProps = ComponentProps<typeof Collapse.Content>;

interface StoryRenderProps extends TCollapseProps {
	onChange: TCollapseProps['onChange'];
	id: TCollapseProps['id'];
	Summary: TSummaryProps;
	'Summary.arrowMode': TSummaryProps['arrowMode'];
	Content: TContentProps;
	Accordion: boolean;
}

type Story = StoryObj<StoryRenderProps>;

/**
 * ### Collapse
 */
const meta = {
	title: 'DesignSystem/Component/Collapse',
	tags: ['autodocs'],
	argTypes: {
		Accordion: {
			description:
				'자식 Collapse들이 Accordion처럼 작동되도록 변경. Accordion컴포넌트의 자식들로 Collapse가 존재하도록 구성',
			control: 'radio',
			options: [true, false]
		},
		onChange: {
			description: 'Collapse status 변경 trigger'
		},
		id: {
			description: 'Collapse 고유 id'
		},
		Summary: {
			description: '[children] Collapse Summary 컴포넌트'
		},
		'Summary.arrowMode': {
			description: '[children] Collapse Summary 화살표 색상 모드',
			control: 'radio',
			options: ['DARK', 'WHITE']
		},
		Content: {
			description: '[children] Collapse Content 컴포넌트'
		}
	},
	component: Collapse,
	render: ({ Accordion: withAccordion, ...args }) => {
		const arrowMode = args['Summary.arrowMode'];
		const isWhiteMode = arrowMode === 'WHITE';
		const Wrapper = withAccordion ? Accordion : Fragment;

		return (
			<div className={cn({ 'bg-black': isWhiteMode })}>
				<Wrapper>
					<Collapse
						className="w-[80%] bg-orange-500"
						id={1}
					>
						<Collapse.Summary
							className={cn({ 'text-white': isWhiteMode })}
							arrowMode={arrowMode}
						>
							{args.Summary.children}
						</Collapse.Summary>
						<Collapse.Content
							className={cn('bg-purple-500', { 'text-white': isWhiteMode })}
						>
							{args.Content.children}
						</Collapse.Content>
					</Collapse>
					<Collapse
						className="w-[80%] bg-orange-500"
						id={2}
					>
						<Collapse.Summary
							className={cn({ 'text-white': isWhiteMode })}
							arrowMode={arrowMode}
						>
							{args.Summary.children}
						</Collapse.Summary>
						<Collapse.Content
							className={cn('bg-purple-500', { 'text-white': isWhiteMode })}
						>
							{args.Content.children}
						</Collapse.Content>
					</Collapse>
				</Wrapper>
			</div>
		);
	}
} satisfies Meta<StoryRenderProps>;

export const Default = {
	args: {
		Accordion: false,
		Summary: {
			children: 'Collapse 버튼'
		},
		'Summary.arrowMode': 'DARK',
		Content: {
			children:
				// eslint-disable-next-line max-len
				'Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠Collapse 콘텐츠'
		}
	}
} satisfies Story;

export default meta;
