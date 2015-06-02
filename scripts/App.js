'use strict';
import React from 'react';
import Cards from './Cards';
import Observer from './Observer';
import Firebase from 'firebase';

require('../styles/app');

var App = React.createClass({

	componentWillMount () {
		this.firebaseRef = new Firebase('https://react-poker.firebaseio.com/app');
		this.firebaseRef.on('child_added', (dataSnapshot) => {
			console.log(dataSnapshot.val());
		});
	},

	getInitialState () {
		return {cards: [
			{name: 'xs'},
			{name: 's'},
			{name: 'm'},
			{name: 'l'},
			{name: 'xl'},
			{name: '?'}
		]};
	},
	onToggleObserver () {
		//set this user to be an observer
		console.log('toggle observer');
	},
	onCardSelected (name) {
		console.log('cards selected ' + name);
	},
	render () {
		return (
			<div>
				<div className="col-left">
					<h1>Players</h1>
				</div>
				<div className="col-right">
					<Cards cardValues={this.state.cards} onCardSelected={this.onCardSelected}/>
					<Observer onToggleObserver={this.onToggleObserver}/>
				</div>
			</div>
		);
	}
});

export default App;