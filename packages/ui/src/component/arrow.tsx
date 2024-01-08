/* eslint-disable max-len */

import type { SVGProps } from 'react';

const Arrow = ({ fill, ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.99996 9.64645L12.6464 5L13.3535 5.70711L7.99996 11.0607L2.64641 5.70711L3.35352 5L7.99996 9.64645Z"
				fill={fill}
			/>
		</svg>
	);
};

export default Arrow;
