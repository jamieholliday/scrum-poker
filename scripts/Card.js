'use strict';
import React from 'react';
import classNames from 'classnames';

export default class Card extends React.Component {
	constructor() {
		super();
	}
	handleClick() {
		this.props.cardSelected(this.props.children.name);
	}
	render() {
		return (
			<li onClick={e => this.handleClick()}>{this.props.children}</li>
		);
	}
}