import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
	return (
		<>
			<h1>About</h1>
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
			<Link to='/'>Ir al inicio</Link>
		</>
	);
}
