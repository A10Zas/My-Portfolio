import { Loader } from 'lucide-react';
import React from 'react';

const Loading = () => {
	return (
		<div className="w-full min-h-screen flex justify-center items-center">
			<Loader className="animate-spin transition-all duration-1000 w-44 h-44" />
		</div>
	);
};

export default Loading;
