import type {
	ISelectedArmoryEquipment,
	TParsedArmory
} from '@/service/armories/types';

export interface IEquipCardProps
	extends TParsedArmory<ISelectedArmoryEquipment> {
	onClick: () => void;
}
