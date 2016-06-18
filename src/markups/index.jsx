'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Store from 'Store';

import Header from './modules/header/header.jsx';
import Content from './modules/content/content.jsx';
import Footer from './modules/footer/footer.jsx';

import Contact from './modules/contact/Contact.jsx';
import Bio from './modules/bio/Bio.jsx';
import Gallery from './modules/gallery/Gallery.jsx';
import Home from './modules/home/Home.jsx';
import Error from './modules/error/Error.jsx';

class PhotoPortfolio extends React.Component {
	constructor() {
		super();
		this.state = Store.getAll();
	}
	getStateData() {
		return 12341234;
	}
	render() {
		return (
			<div className="g-wrapper__inner">
				<Header header={this.state.header} />
				<Content context={this.props.children} content={this.state.content}/>
				<Footer footer={this.state.footer} />
			</div>
		);
	};
};

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={PhotoPortfolio} >
			<IndexRoute component={Home}></IndexRoute>
			<Route path="bio" component={Bio}></Route>
			<Route path="contact" component={Contact} ></Route>
			<Route path="gallery" component={Gallery}></Route>
			<Route path="*" component={Error}/>
		</Route>
	</Router>
);

render(routes, document.querySelector(".g-wrapper"));