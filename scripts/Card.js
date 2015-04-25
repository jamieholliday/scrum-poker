'use strict';
import React from 'react';
//import classNames from 'classnames';

var Card = React.createClass({
	propTypes: {
		cardSelected: React.PropTypes.func,
		children: React.PropTypes.object
	},
	handleClick: function() {
		this.props.cardSelected(this.props.children.name);
	},
	render: function() {
		return (
			<li onClick={this.handleClick}>{this.props.children}</li>
		);
	}
});

export default Card;