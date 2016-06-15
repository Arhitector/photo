'use strict';

import React from 'react';
import LightboxTech from 'react-lightbox-component';
var Lightbox = LightboxTech.Lightbox;

module.exports = class Sidebar extends React.Component {
	render() {
		var rows = [];
		var imageServer = 'http://loremflickr.com/300/300?random=';
		for (var i=0; i < 20; i++) {
			var images = [
				{
					src: imageServer + i,
					title: '',
					description: ''
				}
			];
			console.log(images[0]);
			// rows.push(<a href={imageRender} key={i} className="m-sidebar__image"><img className="s-image" src={imageRender} alt=""/></a>);
			rows.push(<div key={i} className="m-sidebar__image"><Lightbox images={images} showImageModifiers={false} /></div>);
		}
		return (
			<div className="m-sidebar">
				<div className="m-sidebar__wrap">
				{rows.map(function(rows) {
					return rows;
				})}
				</div>
			</div>
		);
	}
};