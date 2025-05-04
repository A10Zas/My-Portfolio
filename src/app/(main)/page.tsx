import TechStackSection from '@/components/TechStackSection';
import HeroSection from '@/components/HeroSection';
import WorkAndEducationSection from '@/components/WorkAndEducationSection';
import FeaturedProjectSection from '@/components/FeaturedProjectSection';

export default function Home() {
	return (
		<div className="w-3xl p-8">
			{/* Hero Section  */}
			<HeroSection />

			{/* Tech Stack Section */}
			<TechStackSection />

			{/* Work and Education Section */}
			<WorkAndEducationSection />

			{/* Featured Project Section */}
			<FeaturedProjectSection />
		</div>
	);
}
