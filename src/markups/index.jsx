'use strict';

// import React from 'react';
// import ReactDOM from 'react-dom';
var React = require('react');
var ReactDOM = require('react-dom');
// var Router = require('react-router').Router;
// var Route = require('react-router').Route;
// var Link = require('react-router').Link;
// import { browserHistory } from 'react-router';
// var browserHistory = require('history/lib/createBrowserHistory');

// import Header from './modules/header/header.jsx';
// var Header = require('./modules/header/header.jsx');
// var Content = require('./modules/content/content.jsx');
// var Footer = require('./modules/footer/footer.jsx');

//
// class PhotoPortfolio extends React.Component {
// 	render() { 
// 		return (
// 			<div className="g-wrapper__inner">
// 				<Header title="photoportfolio" text="the best of my photos"/>
// 				<Content />
// 				<Footer />
// 			</div>
// 		);
// 	};
// };
class ErroPage extends React.Component {
	render() {
		return (
			<div className="g-error-page">
				404
			</div>
		);
	};
};

/*
var routes = (
	<Router history={browserHistory()}>
		<Route path="/index.html" component={PhotoPortfolio} />
		<Route path="*" component={ErroPage}/>
	</Router>
);
*/

ReactDOM.render(ErroPage, document.querySelector(".g-wrapper"));