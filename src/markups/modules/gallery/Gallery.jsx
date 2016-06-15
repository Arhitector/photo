'use strict';

import React from 'react';
import ReactSwipe from 'react-swipe';

const swipeOptions = {
	speed: 400,
	auto: 3000
};

export default class Carousel extends React.Component {
	render() {
		return (
			<ReactSwipe className="m-gallery carousel" swipeOptions={swipeOptions} >
				<div>
					<img className="s-image" src="http://loremflickr.com/300/300?random=1" alt=""/>
				</div>
				<div>
					<img className="s-image" src="http://loremflickr.com/300/300?random=2" alt=""/>
				</div>
				<div>
					<img className="s-image" src="http://loremflickr.com/300/300?random=3" alt=""/>
				</div>
				<div>
					<img className="s-image" src="http://loremflickr.com/300/300?random=4" alt=""/>
				</div>
			</ReactSwipe>
		);
	}
}