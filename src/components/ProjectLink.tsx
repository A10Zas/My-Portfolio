import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent } from 'react';

const ProjectLink = ({
	href,
	icon: Icon,
	label,
}: {
	href: string;
	label: string;
	icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'>>;
}) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="border rounded-full dark:bg-gray-100 dark:text-black bg-gray-800 text-white px-3 py-1.5 text-xs font-semibold flex items-center gap-2 hover:scale-105 transition-transform duration-200 hover:shadow-md"
	>
		<Icon size={15} />
		{label}
	</a>
);

export default ProjectLink;
