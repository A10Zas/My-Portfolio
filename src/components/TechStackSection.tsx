import {
	FaReact as ReactIcon,
	FaDocker as DockerIcon,
	FaGitAlt as GitIcon,
} from 'react-icons/fa';
import {
	RiNodejsLine as NodeIcon,
	RiNextjsLine as NextJsIcon,
	RiVercelLine as VercelIcon,
} from 'react-icons/ri';
import { SiNestjs as NestJsIcon } from 'react-icons/si';
import { TbBrandMongodb as MongoDbIcon } from 'react-icons/tb';
import TechStackCard from './TechStackCard';

const TechStackSection = () => {
	const techStack = [
		{ title: 'React', Icon: ReactIcon },
		{ title: 'Next.js', Icon: NextJsIcon },
		{ title: 'Node.js', Icon: NodeIcon },
		{ title: 'Nest.js', Icon: NestJsIcon },
		{ title: 'MongoDB', Icon: MongoDbIcon },
		{ title: 'Docker', Icon: DockerIcon },
		{ title: 'Git', Icon: GitIcon },
		{ title: 'Vercel', Icon: VercelIcon },
	];
	return (
		<section className="pt-12">
			<h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center md:text-start agbalumo-regular">
				My Tech Stack
			</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{techStack.map(({ title, Icon }) => (
					<TechStackCard key={title} title={title} Icon={Icon} />
				))}
			</div>
		</section>
	);
};

export default TechStackSection;
