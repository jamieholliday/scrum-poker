'use strict';
import React from 'react';

export default class Observer extends React.Component {
	constructor() {
		super();
	}
	handleClick() {
		this.props.toggleObserver();
	}
	render() {
		return (
			<button onClick={e => this.handleClick()}>Toogle</button>
		);
	}
}
