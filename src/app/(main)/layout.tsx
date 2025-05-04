import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Navbar />
			<div className="flex justify-center">{children}</div>
			<Footer />
		</div>
	);
}
