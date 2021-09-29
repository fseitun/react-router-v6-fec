import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, [location]);

	return (
		<motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }}>
			<h1>Home</h1>
			<p style={{ fontSize: '100px' }}>
				lorem loremlorem loremlorem lorem lorem loremlorem loremlorem loremlorem
				loremlorem lorem lorem loremlorem loremlorem lorem lorem loremlorem
				lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
				lorem lorem lorem lorem lorem lorem loremlorem loremlorem loremlorem
				lorem lorem loremlorem loremlorem lorem lorem loremlorem loremlorem
				loremlorem loremlorem lorem lorem loremlorem loremlorem lorem lorem
				loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
				lorem lorem lorem lorem lorem lorem lorem lorem loremlorem loremlorem
				loremlorem lorem lorem loremlorem loremlorem lorem lorem loremlorem
				loremlorem loremlorem loremlorem lorem lorem loremlorem loremlorem lorem
			</p>
		</motion.div>
	);
}
