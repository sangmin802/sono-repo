import type {
	ISelectedArmoryEquipment,
	TParsedArmory
} from '@/service/armories/_types';

export interface IEquipCardProps
	extends TParsedArmory<ISelectedArmoryEquipment> {
	onClick: () => void;
}
