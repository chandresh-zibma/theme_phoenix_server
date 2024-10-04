'use client'
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<div className="scroll-to-top fixed bottom-7 right-7 z-50 group">
			{isVisible &&
				<button onClick={scrollToTop} className="scroll-button bg-white border border-theme-color/10 group-hover:bg-theme-color text-theme-color group-hover:text-white rounded-full p-3 font-semibold">
					↑
				</button>
			}
		</div>
	);
};

export default ScrollToTopButton;
