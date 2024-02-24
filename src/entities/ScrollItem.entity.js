class ScrollItem {
	static items = [
		new ScrollItem('Schrein beim Ghibli Museum', require('../assets/backgrounds/pic1.JPG'), 'dolor sit'),
		new ScrollItem('Naked Sakura Night Garden', require('../assets/backgrounds/pic6.JPG'), 'This entire area is just beautiful. My pictures don’t do the beauty justice. Many paths to walk. Many gardens, two tea houses, ponds with fish, bridges to walk over, large grass area for picnics, rest and views. Plenty of benches to sit and ponder.'),
		new ScrollItem('Lantern at Laternen Festival', require('../assets/backgrounds/pic2.JPG'), 'dolor sit'),
		new ScrollItem('Lantern at Laternen Festival Naka Itabashi', require('../assets/backgrounds/pic3.JPG'), 'dolor sit'),
		new ScrollItem('Anime Japan Art Gallery', require('../assets/backgrounds/pic4.JPG'), 'dolor sit'),
		new ScrollItem('Anime Japan Riza Atelier', require('../assets/backgrounds/pic5.JPG'), 'Japanische Conventions sind einfach was anderes. Die Anime Japan bestand nur aus Ausstellungen von neuen Animes, Werbung und einer Menge Erlebnisgelegenheiten, wie kleine Kinos, Kunstaustellungen, Host und Maid Vorstellungen und wunderschönen Ständen der großen Player im Anime Bereich.'),
		new ScrollItem('Sunrise from Mount Fuji', require('../assets/backgrounds/pic7.JPG'), 'dolor sit'),
		new ScrollItem('Yokohama before Jojoworld2', require('../assets/backgrounds/pic8.JPG'), 'dolor sit'),
		new ScrollItem('Sakura at Naka Itabashi', require('../assets/backgrounds/pic9.JPG'), 'dolor sit'),
		new ScrollItem('Naked Sakura Night Garden', require('../assets/backgrounds/pic10.JPG'), 'dolor sit'),
		new ScrollItem('Spooky way at a river in Naka Itabashi', require('../assets/backgrounds/pic11.JPG'), 'dolor sit'),
	]

	constructor(label, image, description) {
		this.label = label;
		this.image = image;
		this.description = description;
	}
}


export default ScrollItem;
