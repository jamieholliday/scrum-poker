'use strict';
import React from 'react';

var Card = React.createClass({
	propTypes: {
		children: React.PropTypes.object,
		onCardSelected: React.PropTypes.func
	},
	handleClick: function() {
		this.props.onCardSelected(this.props.children.name);
	},
	render: function() {
		return (
			<li onClick={this.handleClick}>{this.props.children}</li>
		);
	}
});

export default Card;