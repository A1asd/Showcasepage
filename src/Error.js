import light from './assets/dark-theme.png';
import './App.css';
import { useState } from 'react';

function Error() {
	const [lightTheme, setLightTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);

	function switchTheme() {
		if (lightTheme) {
			document.getElementById('root').classList.remove('light');
			document.getElementById('root').classList.add('dark');
			setLightTheme(false);
		} else {
			document.getElementById('root').classList.remove('dark');
			document.getElementById('root').classList.add('light');
			setLightTheme(true)
		}
	}

	return (
		<div className="App">
			<header>
				<img className='theme-switcher' src={light} onClick={() => switchTheme()} alt="a light bulb for switching themes" />
				<span>_cnt<span className='emphasize'>C</span>t</span>
				<span>_nf<span className='emphasize'>O</span></span>
				<div className='logo' alt="das react logo"></div>
			</header>
			<h1>Oops...</h1>
			<p>There is nothing here</p>
		</div>
	);
}

export default Error;
