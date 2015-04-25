'use strict';
import React from 'react';

var Observer = React.createClass({
	propTypes: {
		toggleObserver: React.PropTypes.func
	},
	handleClick: function () {
		console.log(this.props);
		this.props.toggleObserver();
	},
	render() {
		return (
			<button onClick={this.handleClick}>Toogle</button>
		);
	}
});

export default Observer;
