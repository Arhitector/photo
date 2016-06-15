'use strict';

import React from 'react';
import { Link } from 'react-router';

import Sidebar from '../sidebar/Sidebar.jsx';

class Content extends React.Component {
	render() {
		return (
			<main className="m-content">
				<Sidebar />
				<div className="m-content__inner">
					<nav className="s-menu">
						<svg width="100%" height="100%" className="s-bio" >
							<circle r="42%" cx="50%" cy="50%" fill="none" stroke="gold" strokeWidth="14.8%" strokeDasharray="52% 214%" strokeDashoffset="2%" />
						</svg>
						<svg width="100%" height="100%" className="s-services" >
							<circle r="42%" cx="50%" cy="50%" fill="none" stroke="red" strokeWidth="14.8%" strokeDasharray="52% 214%" strokeDashoffset="55%" />
						</svg>
						<svg width="100%" height="100%" className="s-home" >
							<circle r="42%" cx="50%" cy="50%" fill="none" stroke="green" strokeWidth="14.8%" strokeDasharray="52% 214%" strokeDashoffset="108%" />
						</svg>
						<svg width="100%" height="100%" className="s-gallery" >
							<circle r="42%" cx="50%" cy="50%" fill="none" stroke="orange" strokeWidth="14.8%" strokeDasharray="52% 214%" strokeDashoffset="161%" />
						</svg>
						<svg width="100%" height="100%" className="s-contacts" >
							<circle r="42%" cx="50%" cy="50%" fill="none" stroke="blue" strokeWidth="14.8%" strokeDasharray="52% 214%" strokeDashoffset="214.5%" />
						</svg>
						<Link className="s-menu__link-bio" 		to="bio" >biografia</Link>
						<Link className="s-menu__link-services"	to="services" >services</Link>
						<Link className="s-menu__link-gallery"	to="gallery" >gallery</Link>
						<Link className="s-menu__link-home" 	to="/" >home</Link>
						<Link className="s-menu__link-contact"	to="contact" >contact</Link>
						<div className="s-menu__frame">
								{this.props.context}
						</div>
					</nav>
					<div className="s-control-left"></div>
					<div className="s-control-right"></div>
				</div>
				<Sidebar />
			</main>
		);
	};
};
module.exports = Content;