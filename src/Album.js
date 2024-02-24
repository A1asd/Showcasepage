//import logo from './assets/logo.svg';
import light from './assets/dark-theme.png';
import './App.css';
import ScrollItem from './entities/ScrollItem.entity';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export async function loader({params}) {
	console.log(params);
	const item = await ScrollItem.items[params.albumId]
	return { item }
}

function Album() {
	const [lightTheme, setLightTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);

	const { item } = useLoaderData();

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
			<h1><Link to={'/'}>Back to listing</Link> --- {item.label}</h1>
			<img src={item.image} style={{width: '50%', margin: 'auto'}} alt=''/>
			<p style={{width:'50%', margin: 'auto'}}>{item.description}</p>
		</div>
	);
}

export default Album;
