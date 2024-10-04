import React from 'react';
import ApplicationDetailList from './ApplicationDetailList';

const data = [
	{
		image: 'https://phoenix.zibma.com/Site/image/icon/home.png',
		title: 'Home Work',
		description: 'We provide home work through application and also track report checking',
	},
	{
		image: 'https://phoenix.zibma.com/Site/image/icon/home.png',
		title: 'School Work',
		description: 'Manage and track school assignments and projects effectively',
	},
	{
		image: 'https://phoenix.zibma.com/Site/image/icon/home.png',
		title: 'Office Work',
		description: 'Optimize office work management with our tools and services',
	},
	{
		image: 'https://phoenix.zibma.com/Site/image/icon/home.png',
		title: 'Project Management',
		description: 'Streamline your project management processes with our solutions',
	},
	{
		image: 'https://phoenix.zibma.com/Site/image/icon/home.png',
		title: 'Meeting Scheduler',
		description: 'Schedule and manage your meetings efficiently',
	},
	{
		image: 'https://phoenix.zibma.com/Site/image/icon/home.png',
		title: 'To-do List',
		description: 'Organize your tasks and to-do lists in one place',
	},
	{
		image: 'https://phoenix.zibma.com/Site/image/icon/home.png',
		title: 'Report Generation',
		description: 'Generate detailed reports easily and quickly',
	},
	{
		image: 'https://phoenix.zibma.com/Site/image/icon/home.png',
		title: 'Analytics',
		description: 'Get insights and analytics on your work and productivity',
	},
];

const ApplicationDetailContainer: React.FC = () => {
	const half = Math.ceil(data.length / 2);
	const firstHalf = data.slice(0, half);
	const secondHalf = data.slice(half);

	return (
		<div className="grid grid-cols-1 gap-5 md:grid-cols-3 items-center">
			<div>
				<ApplicationDetailList data={firstHalf} />
			</div>
			<div className="h-[480px] relative flex justify-center">
				<img src="/assets/mobile.png" alt="Application Mobile" className="z-[1] h-[480px] absolute" />
				<img src="/assets/application.gif" alt="Application Preview" className="h-[480px] p-5" />
			</div>
			<div>
				<ApplicationDetailList data={secondHalf} />
			</div>
		</div>
	);
};

export default ApplicationDetailContainer;
