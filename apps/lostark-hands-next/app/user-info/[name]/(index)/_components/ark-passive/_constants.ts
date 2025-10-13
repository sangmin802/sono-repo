import { ArkPassiveType } from '@/service/armories/_types';

export const ARK_PASSIVE_COLOR_CONFIG: Record<ArkPassiveType, string> = {
	[ArkPassiveType.Enlightenment]: 'text-[#83e9ff]',
	[ArkPassiveType.Evolution]: 'text-[#f2d694]',
	[ArkPassiveType.Leap]: 'text-[#c2ea55]'
};

export const ARK_PASSIVE: Record<string, ArkPassiveType> = {
	enlightenment: ArkPassiveType.Enlightenment,
	evolution: ArkPassiveType.Evolution,
	leap: ArkPassiveType.Leap
};
