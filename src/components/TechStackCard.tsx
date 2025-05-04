/* eslint-disable @typescript-eslint/no-explicit-any */

type Props = {
	title: string;
	Icon: any;
};

const TechStackCard = ({ title, Icon }: Props) => {
	return (
		<div className="flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-4 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out">
			<Icon className="w-8 h-8 mb-3 text-blue-500 dark:text-blue-400" />
			<h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
		</div>
	);
};

export default TechStackCard;
