'use strict';
import React from 'react';
import Cards from './Cards';
import Observer from './Observer';

require('../styles/app.css');

var App = React.createClass({
	getInitialState: function() {
		return {cards: [
			{name: 'xs'},
			{name: 's'},
			{name: 'm'},
			{name: 'l'},
			{name: 'xl'},
			{name: '?'}
		]};
	},
	toggleObserver: function() {
		//set this user to be an observer
		console.log('toggle observer');
	},
	cardSelected: function(name) {
		console.log('cards selected ' + name);
	},
	render: function() {
		return (
			<div>
				<div className="col-left"></div>
				<div className="col-right">
					<Cards cardSelected={this.cardSelected} cardValues={this.state.cards}/>
					<Observer toggleObserver={this.toggleObserver}/>
				</div>
			</div>
		);
	}
});

export default App;