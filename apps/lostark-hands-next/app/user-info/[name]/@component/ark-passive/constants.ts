import { ArkPassiveType } from '@/service/armories/types';

export const ARK_PASSIVE_COLOR_CONFIG: Record<ArkPassiveType, string> = {
	[ArkPassiveType.Enlightenment]: 'text-[#83e9ff]',
	[ArkPassiveType.Evolution]: 'text-[#f2d694]',
	[ArkPassiveType.Leap]: 'text-[#c2ea55]'
};
