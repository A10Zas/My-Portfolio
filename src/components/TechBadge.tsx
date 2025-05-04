const TechBadge = ({ label }: { label: string }) => (
	<div className="border border-gray-500 dark:border-gray-600 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-1 text-xs font-medium">
		{label}
	</div>
);

export default TechBadge;
