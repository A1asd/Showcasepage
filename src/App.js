import light from './assets/dark-theme.png';
import mousewheelmove from './assets/mousemove.svg';
import './App.css';
import HorizontalScroll from './components/HorizontalScroll';
import ScrollItem from './entities/ScrollItem.entity';
import { useState } from 'react';
import scrollItems from './galleries';

function App() {
	const [listPointer, setListPointer] = useState(0);
	const [scrollTranslation, setScrollTranslation] = useState(37);
	const [firstScrolled, setFirstScrolled] = useState(false);
	const [lightTheme, setLightTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);

	//const items = scrollItems.map(item => {
	//	return new ScrollItem(item.title, require(item.cover), item.description);
	//})
	const items = ScrollItem.items;

	const handleScroll = event => {
		if (Math.sign(event.deltaY > 0)) {
			setFirstScrolled(true);
			setScrollTranslation(Math.max(-51, Math.min(37, scrollTranslation - 6)))
		} else {
			setScrollTranslation(Math.max(-51, Math.min(37, scrollTranslation + 6)))
		}
	}

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

	function routeTo(item) {
		console.log('routing to item', item)
	}

	return (
		<div className="App" onWheel={handleScroll}>
			<header>
				<img className='theme-switcher' src={light} onClick={() => switchTheme()} alt="a light bulb for switching themes" />
				<span>_cnt<span className='emphasize'>C</span>t</span>
				<span>_nf<span className='emphasize'>O</span></span>
				<div className='logo' alt="das react logo"></div>
			</header>
			<h1>{items[listPointer].label}</h1>
			<HorizontalScroll items={items} listPointer={listPointer} setListPointer={setListPointer} scrollTranslation={scrollTranslation} routeTo={routeTo}/>
			<p className='description'>{items[listPointer].description}</p>
			{firstScrolled ? null : <img className='mouse-wheel-move' src={mousewheelmove} alt="eine maus mit einem pfeil nach unten, deutet an nach unten zu scrollen"/>}
		</div>
	);
}

export default App;
