'use strict';

var React = require('react');

// class Bio extends React.Component {
// 	render() {
// 		return (
// 			<div>Biografia</div>
// 		);
// 	}
// };

// ReactDOM.render(<Bio />, document.querySelector(".m-content__frame"));

module.exports = class Content extends React.Component {
	render() {
		return (
			<main className="m-content">
				<a href="">bio</a>
				<a href="">services</a>
				<a href="">home</a>
				<a href="">gallery</a>
				<a href="">contacts</a>
				<div className="m-content__frame"></div>
			</main>
		);
	};
};