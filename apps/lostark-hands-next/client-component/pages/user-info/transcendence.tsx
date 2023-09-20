import Image from 'next/image';

import { removeHtmlTag } from '@sono-repo/util/convert';

import { CDN_URL } from '@/constant';

import type { ToCamelKey } from '@/type';
import type { TElement } from '@/type/element-json';

const Transcendence = ({
	value
}: ToCamelKey<TElement['IndentStringGroup']>) => {
	const [, htmlText] = value.element_000.topStr.split('[초월]');
	const [grade, total] = removeHtmlTag(htmlText).split('단계');

	return (
		<div className="flex shrink-0 items-center space-x-[4px] text-[12px] [&_*]:text-[12px]">
			<Image
				className="h-[18px] w-[18px]"
				src={`${CDN_URL}/2018/obt/assets/images/common/game/ico_tooltip_transcendence.png`}
				width={18}
				height={18}
				alt="transcendence"
			/>
			{grade} 단계
			<b>+{total}</b>
		</div>
	);
};

export default Transcendence;
