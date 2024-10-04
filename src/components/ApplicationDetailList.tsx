import React from 'react';
import ApplicationDetailCard from './ApplicationDetailCard';

interface ApplicationDetailListProps {
	data: { image: string; title: string; description: string }[];
}

const ApplicationDetailList: React.FC<ApplicationDetailListProps> = ({ data }) => {
	return (
		<div>
			{data.map((item, index) => (
				<ApplicationDetailCard
					key={index}
					image={item.image}
					title={item.title}
					description={item.description}
				/>
			))}
		</div>
	);
};

export default ApplicationDetailList;
