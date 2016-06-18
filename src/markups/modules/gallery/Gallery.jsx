'use strict';

import React from 'react';
import ReactSwipe from 'react-swipe';
import Store from 'Store';

const swipeOptions = {
	speed: 400,
	auto: 3000
};

export default class Carousel extends React.Component {
	constructor() {
		super();
		this.state = Store.getAll();
	}
	createGallery() {
		var amountImages = this.state.content.gallery.length;
		var counter = 0;
		var gallery = [];
		for (counter = 0; counter < amountImages; counter++) {
			gallery.push(<div key={counter} ><img className="s-image" src={this.state.content.gallery[counter].src} alt=""/></div>);
		}
		return gallery;
	};
	render() {
		return (
			<ReactSwipe className="m-gallery carousel" swipeOptions={swipeOptions} >
				{this.createGallery()}
			</ReactSwipe>
		);
	}
}