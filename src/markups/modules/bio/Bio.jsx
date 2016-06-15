'use strict';

import React from 'react';

import bioData from 'data';

export default class Bio extends React.Component {
	constructor() {
		super();
	}
	render() {
		console.log(this.props.content);
		return (
			<div className="m-bio" >
				<div className="m-bio__title">{bioData.content.bio.title}</div>
				<div className="m-bio__content">{bioData.content.bio.text}</div>
			</div>
		)
	}
};