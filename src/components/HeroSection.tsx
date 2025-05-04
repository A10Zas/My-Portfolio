import dayjs from 'dayjs';
import 'dayjs/plugin/customParseFormat';
import { Button } from '@/components/ui/button';
import { DownloadIcon, GithubIcon, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
	const birthDate = dayjs('2002-12-09');
	const today = dayjs();

	// Calculate age
	const age = today.diff(birthDate, 'year');
	return (
		<div className="flex flex-col md:flex-row justify-between gap-8">
			{/* Text Block */}
			<div className="flex-1 pr-0 md:pr-8">
				<h1 className="agbalumo-regular text-3xl text-gray-800 dark:text-gray-100">
					Greetings, I&apos;m Zunaid Ahammed
				</h1>

				<p className="poppins-regular pt-4 text-base text-gray-700 dark:text-gray-300 max-w-xl">
					I&apos;m a {age}-year-old programmer with a very particular set of
					skills from India who loves building full-stack web applications.
				</p>

				<p className="poppins-regular pt-3 text-base text-gray-700 dark:text-gray-300 max-w-xl">
					I work with modern technologies like React, Next.js, and Node.js to
					create practical, user-focused apps. I&apos;m always learning and
					improving my craft to become a better full-stack developer.
				</p>

				{/* CTA + Socials */}
				<div className="pt-8 flex flex-col md:flex-row justify-between gap-6 md:gap-8">
					{/* Resume Button */}
					<Button
						variant="outline"
						className="flex items-center gap-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-gray-800 dark:text-gray-200"
					>
						Resume <DownloadIcon className="w-4 h-4" />
					</Button>

					{/* Social Icons */}
					<div className="flex gap-3">
						{/* LinkedIn */}
						<Link
							href="https://www.linkedin.com/in/zunaid-ahammed-59b381239/"
							target="_blank"
						>
							<Button
								variant="outline"
								className="group border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
							>
								<Linkedin className="text-gray-500 dark:text-gray-400 group-hover:text-blue-700 dark:group-hover:text-blue-400 w-4 h-4" />
							</Button>
						</Link>

						{/* GitHub */}
						<Link href="https://github.com/A10Zas" target="_blank">
							<Button
								variant="outline"
								className="group border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
							>
								<GithubIcon className="text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white w-4 h-4" />
							</Button>
						</Link>

						<Link href="mailto:zunaid.a10@outlook.com" target="_blank">
							{/* Email */}
							<Button
								variant="outline"
								className="group border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
							>
								<Mail className="text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 w-4 h-4" />
							</Button>
						</Link>
					</div>
				</div>
			</div>

			{/* Image Block */}
			<div className="flex justify-center">
				<Image
					src="/img/zunaid.jpg"
					alt="profile pic"
					width={200}
					height={100}
					className="rounded-xl shadow-md dark:shadow-lg"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
