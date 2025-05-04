import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-roboto',
});

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Created by Zunaid Ahammed',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
