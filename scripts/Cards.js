'use strict';
import React from 'react';
import Card from './Card';

var Cards = React.createClass({
	propTypes: {
		cardSelected: React.PropTypes.func,
		cardValues: React.PropTypes.array
	},
	render: function() {
		var createCard = (cardText, index) => {
			return <Card cardSelected={this.props.cardSelected} key={index + cardText.name}>{cardText}</Card>;
		};
		return (
			<ul>{this.props.cardValues.map(createCard)}</ul>
		);
	}
});

export default Cards;
