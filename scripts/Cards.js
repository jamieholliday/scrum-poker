'use strict';
import React from 'react';
import Card from './Card';

export default class Cards extends React.Component {
	constructor() {
		super();
		this.state = {cards: [
			{name: 'xs'},
			{name: 's'},
			{name: 'm'},
			{name: 'l'},
			{name: 'xl'},
			{name: '?'}
		]};
	}
	render() {
		let createCard = (cardText, index) => {
			return <Card cardSelected={this.props.cardSelected} key={index + cardText.name}>{cardText}</Card>;
		};
		return (
			<ul>{this.state.cards.map(createCard)}</ul>
		);
	}
}
