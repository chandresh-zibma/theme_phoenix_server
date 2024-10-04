import React from 'react';

interface TestimonialCardProps {
	message: string;
	name: string;
	stdClass: string;
	avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ message, name, stdClass, avatar }) => {
	return (
		<div className='flex flex-col items-center gap-3 h-full'>
			<div className='flex flex-col items-center h-full'>
				<div className='bg-testimonial-message-bg-color/10 text-testimonial-message-bg-color text-sm leading-6 text-center p-3 rounded-md h-[137px] overflow-auto'>
					{message}
				</div>
				<div className='mx-auto h-0 w-0 border-l-[7px] border-t-[7px] border-r-[7px] border-solid border-l-transparent border-r-transparent border-t-testimonial-message-bg-color/10'></div>
			</div>
			<div className='h-14 aspect-square border rounded-full overflow-hidden'>
				<img src={avatar} alt={`${name} Avatar`} className='h-full w-full object-cover' />
			</div>
			<div className='flex flex-col items-center font-semibold'>
				<span className='text-heading-text-color text-sm'>{name}</span>
				<span className='text-paragraph-text-color/50 text-xs'>{stdClass}</span>
			</div>
		</div>
	);
};

export default TestimonialCard;
