'use strict';
import React from 'react';
import Card from './Card';

var Cards = React.createClass({
	propTypes: {
		cardValues: React.PropTypes.array,
		onCardSelected: React.PropTypes.func
	},
	render: function() {
		var createCard = (cardText, index) => {
			return <Card key={index + cardText.name} onCardSelected={this.props.onCardSelected}>{cardText}</Card>;
		};
		return (
			<ul>{this.props.cardValues.map(createCard)}</ul>
		);
	}
});

export default Cards;
