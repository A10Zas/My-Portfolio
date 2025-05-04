import dayjs from 'dayjs';
import React from 'react';
import Link from 'next/link';
import { GithubIcon, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
	const year = dayjs().year();

	return (
		<footer className="w-full mt-12 pb-20">
			<div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-sm text-gray-600 dark:text-gray-400 gap-4">
				{/* Left - Copyright */}
				<div className="text-center md:text-left">
					&copy; {year} Zunaid Ahammed. All rights reserved.
				</div>

				{/* Right - Social Links */}
				<div className="flex gap-4">
					<Link
						href="https://github.com/A10Zas"
						aria-label="GitHub"
						className="hover:text-black dark:hover:text-white transition-colors duration-200"
					>
						<GithubIcon className="w-4 h-4" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/zunaid-ahammed-59b381239/"
						aria-label="LinkedIn"
						className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
					>
						<Linkedin className="w-4 h-4" />
					</Link>
					<Link
						href="mailto:zunaid.a10@outlook.com"
						aria-label="Email"
						className="hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
					>
						<Mail className="w-4 h-4" />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
