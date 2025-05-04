import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

const WorkAndEducationSection = () => {
	return (
		<div className="w-full pt-12">
			<Tabs defaultValue="work" className="w-full">
				<TabsList className="grid grid-cols-2 w-full bg-gray-100 dark:bg-gray-900 rounded-md">
					<TabsTrigger value="work" className="text-sm">
						Work
					</TabsTrigger>
					<TabsTrigger value="education" className="text-sm">
						Education
					</TabsTrigger>
				</TabsList>

				{/* Work Experience */}
				<TabsContent
					value="work"
					className="border-2 dark:border-gray-700 border-gray-200 rounded-xl mt-4"
				>
					<div className="p-6 space-y-8">
						{/* The Syntax */}
						<div className="flex w-full gap-4">
							<Image
								src="/img/the-syntax.png"
								alt="the-syntax"
								width={64}
								height={64}
								className="w-16 h-16 border-2 rounded-full object-cover"
							/>
							<div className="flex-1">
								<p className="text-xs font-semibold text-gray-600 dark:text-gray-400">
									Jan 2025 – Present
								</p>
								<h4 className="text-base font-bold">The Syntax</h4>
								<p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
									Full Stack Web Developer & Co-Founder
								</p>
								<ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
									<li>
										Co-founded a startup focused on programming education.
									</li>
									<li>
										Lead dev building real-world web apps and teaching React.
									</li>
									<li>Designed and scaled learning platforms for students.</li>
									<li>Helping shape the long-term technical roadmap.</li>
								</ul>
							</div>
						</div>

						{/* Apparium */}
						<div className="flex w-full gap-4">
							<Image
								src="/img/apparium.png"
								alt="apparium"
								width={64}
								height={64}
								className="w-16 h-16 border-2 rounded-full object-cover"
							/>
							<div className="flex-1">
								<p className="text-xs font-semibold text-gray-600 dark:text-gray-400">
									June 2022 – Jan 2025
								</p>
								<h4 className="text-base font-bold">Apparium (Supranostic)</h4>
								<p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
									Full Stack Web Developer
								</p>
								<ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
									<li>
										Sole full stack dev managing dashboards, APIs, and UI.
									</li>
									<li>Shipped FastCure Pharma Admin Dashboard from scratch.</li>
									<li>
										End-to-end experience with front-end, back-end, deployment.
									</li>
									<li>
										Grew rapidly by working independently in a startup pace.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</TabsContent>

				{/* Education */}
				<TabsContent
					value="education"
					className="border-2 dark:border-gray-700 border-gray-200 rounded-xl mt-4"
				>
					<div className="p-6 space-y-8">
						{/* BTech */}
						<div className="flex w-full gap-4">
							<div className="w-16 h-16 border-2 rounded-full bg-gray-300 dark:bg-gray-700" />
							<div className="flex-1">
								<p className="text-xs font-semibold text-gray-600 dark:text-gray-400">
									June 2022 – May 2025
								</p>
								<h4 className="text-base font-bold">
									Global Institute of Management & Technology (GIMT)
								</h4>
								<p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
									B.Tech in Computer Science and Engineering
								</p>
								<ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
									<li>Currently pursuing final year with project focus.</li>
									<li>
										Final year project: <strong>Engineering Hub</strong>.
									</li>
									<li>
										Features: Attendance, Notes Sharing, Online Exams, Database.
									</li>
									<li>
										Developing entire stack solo: frontend, backend &
										deployment.
									</li>
								</ul>
							</div>
						</div>

						{/* Diploma */}
						<div className="flex w-full gap-4">
							<div className="w-16 h-16 border-2 rounded-full bg-gray-300 dark:bg-gray-700" />
							<div className="flex-1">
								<p className="text-xs font-semibold text-gray-600 dark:text-gray-400">
									2020 – 2022
								</p>
								<h4 className="text-base font-bold">
									Berhampore Polytechnic College
								</h4>
								<p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
									Diploma in Computer Science and Technology
								</p>
								<ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
									<li>
										Learned core computer science concepts and programming.
									</li>
									<li>
										Completed Java winter training covering OOPs and GUI basics.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default WorkAndEducationSection;
