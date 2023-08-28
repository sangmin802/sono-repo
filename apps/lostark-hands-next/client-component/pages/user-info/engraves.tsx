'use client';

import type { IArmoryEngraving } from '@/service/armories/types';

import type { ToCamelKey } from '@/type';

interface IEngravesProps {
	data: ToCamelKey<IArmoryEngraving>;
}

const Engraves = ({ data }: IEngravesProps) => {
	console.log(data);

	return null;
};

export default Engraves;
