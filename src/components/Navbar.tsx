import Link from 'next/link';
import React from 'react';
import { ModeToggle } from './ModeToggle';

const Navbar = () => {
	return (
		<nav className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-[#0d0d0d]/70 transition-colors duration-300">
			<div className="max-w-3xl mx-auto flex justify-between items-center py-4 px-6 text-lg text-gray-700 dark:text-gray-300">
				<div className="flex gap-6">
					<Link
						href="/"
						className="hover:text-black dark:hover:text-white transition-colors duration-200"
					>
						Home
					</Link>
					<Link
						href="/projects"
						className="hover:text-black dark:hover:text-white transition-colors duration-200"
					>
						Projects
					</Link>
					<Link
						href="/contact"
						className="hover:text-black dark:hover:text-white transition-colors duration-200"
					>
						Contact
					</Link>
				</div>
				<div>
					<ModeToggle />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
