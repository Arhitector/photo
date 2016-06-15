'use strict';

var React = require('react');

module.exports = class Header extends React.Component{
	render(){
		return <div className="m-header">
			<h1 className="m-header__title">{this.props.title}</h1>
			<h4 className="m-header__text">{this.props.text}</h4>
		</div>;
	}
};