'use strict';
import React from 'react';

var Observer = React.createClass({
	propTypes: {
		onToggleObserver: React.PropTypes.func
	},
	handleClick: function () {
		this.props.onToggleObserver();
	},
	render() {
		return (
			<button onClick={this.handleClick}>Toogle</button>
		);
	}
});

export default Observer;
