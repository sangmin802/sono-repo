import cn from 'classnames';

interface IDangerousHTMLProps {
	className?: string;
	html: string;
}

const DangerousHTML = ({ className, html }: IDangerousHTMLProps) => (
	<div
		className={cn('dangerousHTML', className)}
		dangerouslySetInnerHTML={{ __html: html }}
	/>
);

export default DangerousHTML;
