import cn from 'classnames';

interface IQaulityChipProps {
	size: number;
}

export const getQualityColor = (size: number) => {
	if (size < 10) return 'bg-red-500';
	if (size < 30) return 'bg-yellow-500';
	if (size < 70) return 'bg-green-500';
	if (size < 90) return 'bg-blue-500';
	if (size < 100) return 'bg-purple-500';
	if (size === 100) return 'bg-orange-500';

	return 'bg-main-40';
};

const QaulityChip = ({ size }: IQaulityChipProps) => {
	if (size < 0) return;

	return (
		<div
			className={cn(
				getQualityColor(size),
				'flex w-fit items-center rounded-[4px] px-[4px] text-[12px]'
			)}
		>
			품질 {size}
		</div>
	);
};

export default QaulityChip;
