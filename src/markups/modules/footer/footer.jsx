'use strict';

var React = require('react');

module.exports = class Footer extends React.Component {
	render() {
		return <div className="m-footer" >{this.props.footer}</div>
	}
};