'use strict';

import React from 'react';
import Store from 'Store';

export default class Bio extends React.Component {
	constructor() {
		super();
		this.state = Store.getAll();
	}
	render() {
		return (
			<div className="m-bio" >
				<div className="m-bio__title">{this.state.content.bio.title}</div>
				<div className="m-bio__content">{this.state.content.bio.text}</div>
			</div>
		)
	}
};