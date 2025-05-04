import Image from 'next/image';
import { ArrowRight, Globe } from 'lucide-react';
import Link from 'next/link';
import TechBadge from '@/components/TechBadge';
import ProjectLink from '@/components/ProjectLink';

const FeaturedProjectSection = () => {
	return (
		<div className="w-full pt-12">
			<div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-6">
				<h1 className="font-bold text-2xl text-gray-800 dark:text-gray-100 agbalumo-regular">
					Featured Projects
				</h1>
				<Link
					href="/projects"
					className="group text-lg text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 flex items-center gap-2"
				>
					View More
					<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
				</Link>
			</div>

			<div className="flex flex-col md:flex-row gap-4 py-6">
				{/* Project Card 1 */}
				<div className="border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] w-full rounded-xl shadow-sm dark:shadow-none hover:shadow-md transition-shadow duration-300 pb-4">
					<Image
						src="/img/project-1.png"
						alt="project-pic-1"
						width={100}
						height={100}
						className="w-full h-40 object-fill  rounded-t-xl"
					/>
					<h1 className="p-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
						Engineering Hub (Final year Project)
					</h1>
					<div className="flex gap-3 flex-wrap px-4">
						<TechBadge label="Remix JS" />
						<TechBadge label="Nest JS" />
						<TechBadge label="MongoDB" />
						<TechBadge label="Render" />
						<TechBadge label="Docker" />
					</div>
					<div className="flex flex-wrap gap-4 px-4 pt-4">
						<ProjectLink
							href="https://intelliclass.onrender.com/"
							icon={Globe}
							label="Website"
						/>
					</div>
				</div>

				{/* Project Card 2 */}
				<div className="border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] w-full rounded-xl shadow-sm dark:shadow-none hover:shadow-md transition-shadow duration-300 pb-4">
					<Image
						src="/img/project-2.png"
						alt="project-pic-2"
						width={300}
						height={40}
						className="w-full h-40 object-fill rounded-t-xl"
					/>
					<h1 className="p-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
						Fast Cure Pharma Dashboard
					</h1>
					<div className="flex gap-3 flex-wrap px-4">
						<TechBadge label="Next js" />
						<TechBadge label="Node js" />
						<TechBadge label="MongoDB" />
						<TechBadge label="Render" />
						<TechBadge label="Vercel" />
					</div>
					<div className="flex flex-wrap gap-4 px-4 pt-4">
						<ProjectLink
							href="https://fastcurepharmadashboard.vercel.app/"
							icon={Globe}
							label="Website"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProjectSection;
