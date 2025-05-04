'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<div>
			{theme === 'dark' ? (
				<Button variant="outline" size="icon" onClick={() => setTheme('light')}>
					<Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-orange-400" />
				</Button>
			) : (
				<Button variant="outline" size="icon" onClick={() => setTheme('dark')}>
					<Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-blue-400" />
				</Button>
			)}
		</div>
	);
}
