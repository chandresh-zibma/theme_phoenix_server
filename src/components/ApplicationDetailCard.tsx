import React from 'react';

interface ApplicationDetailCardProps {
	image: string;
	title: string;
	description: string;
}

const ApplicationDetailCard: React.FC<ApplicationDetailCardProps> = ({ image, title, description }) => {
	return (
		<div className="flex items-center pb-4 group">
			<img className="w-10" src={image} alt={title} />
			<div className="ps-3">
				<h5 className="text-xl text-heading-text-color font-semibold group-hover:text-theme-color transition-all duration-300">{title}</h5>
				<p className="text-paragraph-text-color text-sm leading-6">{description}</p>
			</div>
		</div>
	);
};

export default ApplicationDetailCard;
