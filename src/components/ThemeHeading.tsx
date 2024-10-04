import React from 'react'
interface HeadingProps {
	text: string;
	className?: string;
}
const ThemeHeading = ({ text, className }: HeadingProps) => {
	return (
		<>
			<div className={`flex flex-col w-fit gap-2 ${className}`}>
				{/* <div className='text-4xl text-heading-text-color font-semibold first-letter:text-theme-color first-letter:text-4xl shadow-[inset_0px_-15px_#ed323761]'>{text}</div> */}
				<div className='text-4xl text-heading-text-color font-semibold'>{text}</div>
				<span className='bg-theme-color w-[10vw] h-1.5 min-w-[80px]'></span>
			</div>
		</>
	)
}

export default ThemeHeading
