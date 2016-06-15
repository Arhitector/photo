'use strict';

import React from 'react';

import Store from 'Store';
import * as Actions from 'Action';

export default class Contact extends React.Component {
	constructor() {
		super();
		this.state = Store.getAll();
	}
	componentDidMount() {
		Store.on("change", ::this._updateState);
	}
	componentWillUnmount() {
		Store.removeListener("change", ::this._updateState);
	}
	_updateState() {
		this.setState(Store.getAll());
	}
	_sendMessage(event) {
		event.preventDefault();
		var formData = {
			name: this.refs.name.value,
			email: this.refs.email.value,
			phone: this.refs.phone.value,
			message: this.refs.message.value
		};
		Actions.sendMessage(formData);
	}
	render() {
		return (
			<div className="m-contact">
				<h1 className="m-contact__title">{this.state.content.contact.title}</h1>
				<form action="" ref="form" onSubmit={::this._sendMessage} className="m-contact__form">
					<input type="text" ref="name" placeholder="name" className="s-name" />
					<input type="tel" ref="phone" placeholder="telephone" className="s-phone" />
					<input type="email" ref="email" placeholder="e-mail" className="s-email" />
					<textarea name="" ref="message" id="" cols="30" rows="10" placeholder="message" className="s-message" ></textarea>
					<button type="submit" >submit</button>
				</form>
			</div>
		);
	}
};